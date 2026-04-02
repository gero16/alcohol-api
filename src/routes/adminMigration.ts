import type { FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify";
import { buildSeedDatasetFromDatabase } from "../content/backup";
import { READ_ONLY_MODE_MESSAGE, isDatabaseUnavailableError } from "../lib/database";
import { getPrismaOrThrow } from "../lib/prisma";
import { applyGuideMetadataSchemaPatches } from "../services/schemaMigrations";

function requireAdminMigrationSecret(request: FastifyRequest, reply: FastifyReply): boolean {
  const expected = process.env.ADMIN_MIGRATION_SECRET?.trim();
  if (!expected) {
    void reply.code(503).send({
      message:
        "Define ADMIN_MIGRATION_SECRET en las variables de entorno del API y redeploy. Luego llama con la cabecera x-admin-migration-secret.",
    });
    return false;
  }
  const provided = String(request.headers["x-admin-migration-secret"] ?? "").trim();
  if (provided !== expected) {
    void reply.code(403).send({
      message: "Cabecera x-admin-migration-secret incorrecta o ausente.",
    });
    return false;
  }
  return true;
}

export const adminMigrationRoutes: FastifyPluginAsync = async (app) => {
  app.post(
    "/backup/snapshot",
    {
      schema: {
        tags: ["Admin"],
        summary: "Métricas de contenido desde PostgreSQL (sin archivo)",
        description:
          "Devuelve solo conteos. El respaldo real de datos es la propia base (pg_dump, réplicas, etc.). Requiere x-admin-migration-secret.",
      },
    },
    async (request, reply) => {
      if (!requireAdminMigrationSecret(request, reply)) {
        return;
      }

      try {
        const snapshot = await buildSeedDatasetFromDatabase();

        return reply.code(200).send({
          message:
            "Volcado lógico desde la base de datos (solo métricas). No se genera archivo en el servidor.",
          categoriesCount: snapshot.categories.length,
          guidesCount: snapshot.guides.length,
          glossaryCount: snapshot.glossary.length,
        });
      } catch (error) {
        if (isDatabaseUnavailableError(error)) {
          return reply.code(503).send({ message: READ_ONLY_MODE_MESSAGE });
        }

        throw error;
      }
    },
  );

  app.get(
    "/schema/guide-metadata-status",
    {
      schema: {
        tags: ["Admin"],
        summary: "Comprobar si existen columnas semanticKey / sectionSlug (sin modificar la BD)",
        description:
          "Requiere cabecera x-admin-migration-secret igual a ADMIN_MIGRATION_SECRET. Útil antes o después de apply-guide-metadata.",
      },
    },
    async (request, reply) => {
      if (!requireAdminMigrationSecret(request, reply)) {
        return;
      }

      try {
        const prisma = getPrismaOrThrow();
        const rows = await prisma.$queryRawUnsafe<
          Array<{ table_name: string; column_name: string }>
        >(
          `SELECT table_name::text, column_name::text
           FROM information_schema.columns
           WHERE table_schema = 'public'
             AND table_name IN ('GuideTab', 'GuideSection', 'GuideTable')
             AND column_name IN ('semanticKey', 'sectionSlug')
           ORDER BY table_name, column_name`,
        );

        return reply.send({
          message: "Columnas encontradas en public (las que falten hay que crear con POST apply-guide-metadata).",
          columns: rows,
        });
      } catch (error) {
        if (isDatabaseUnavailableError(error)) {
          return reply.code(503).send({ message: READ_ONLY_MODE_MESSAGE });
        }
        throw error;
      }
    },
  );

  app.post(
    "/schema/apply-guide-metadata",
    {
      schema: {
        tags: ["Admin"],
        summary: "Añadir columnas semanticKey y sectionSlug en guías (PostgreSQL, idempotente)",
        description:
          "Ejecuta ALTER TABLE ... ADD COLUMN IF NOT EXISTS vía Prisma. Cabecera obligatoria: x-admin-migration-secret = ADMIN_MIGRATION_SECRET.",
      },
    },
    async (request, reply) => {
      if (!requireAdminMigrationSecret(request, reply)) {
        return;
      }

      try {
        const result = await applyGuideMetadataSchemaPatches();

        return reply.code(200).send({
          message:
            "DDL aplicado (o columnas ya existentes). Reinicia el servicio si el cliente Prisma del despliegue era anterior al schema.",
          executed: result.executed,
          statements: [...result.statements],
        });
      } catch (error) {
        if (isDatabaseUnavailableError(error)) {
          return reply.code(503).send({ message: READ_ONLY_MODE_MESSAGE });
        }

        const msg = error instanceof Error ? error.message : String(error);
        return reply.code(500).send({
          message: "Error al aplicar el parche de esquema. Comprueba que la BD es PostgreSQL y los nombres de tabla coinciden con Prisma.",
          detail: msg,
        });
      }
    },
  );
};
