import type { FastifyPluginAsync } from "fastify";
import { Prisma } from "../generated/prisma";
import type { SeedGlossaryItem } from "../domain/contracts";
import { READ_ONLY_MODE_MESSAGE, isDatabaseUnavailableError } from "../lib/database";
import { getGlossaryBySlug, listGlossary, refreshBackupSnapshot } from "../services/content";
import { createGlossaryItem, deleteGlossaryItem, updateGlossaryItem } from "../services/glossary";

const glossaryBodySchema = {
  type: "object",
  required: ["slug", "term", "shortDefinition", "details", "relatedCategories"],
  additionalProperties: false,
  properties: {
    slug: { type: "string", minLength: 1 },
    term: { type: "string", minLength: 1 },
    shortDefinition: { type: "string", minLength: 1 },
    details: {
      type: "array",
      items: { type: "string", minLength: 1 },
    },
    relatedCategories: {
      type: "array",
      items: { type: "string", minLength: 1 },
    },
    featured: { type: "boolean" },
  },
} as const;

export const glossaryRoutes: FastifyPluginAsync = async (app) => {
  app.get(
    "/",
    {
      schema: {
        tags: ["Glossary"],
        summary: "Listar términos del glosario básico",
      },
    },
    async () => listGlossary(),
  );

  app.get(
    "/:slug",
    {
      schema: {
        tags: ["Glossary"],
        summary: "Obtener un término del glosario por slug",
        params: {
          type: "object",
          required: ["slug"],
          properties: {
            slug: { type: "string" },
          },
        },
      },
    },
    async (request, reply) => {
      const { slug } = request.params as { slug: string };
      const item = await getGlossaryBySlug(slug);

      if (!item) {
        return reply.code(404).send({ message: "Término del glosario no encontrado" });
      }

      return item;
    },
  );

  app.post(
    "/",
    {
      schema: {
        tags: ["Glossary"],
        summary: "Crear un término del glosario",
        body: glossaryBodySchema,
      },
    },
    async (request, reply) => {
      const body = request.body as SeedGlossaryItem;

      try {
        const result = await createGlossaryItem(body);
        await refreshBackupSnapshot(app.log);
        return reply.code(201).send(result.item);
      } catch (error) {
        if (
          error instanceof Prisma.PrismaClientKnownRequestError &&
          error.code === "P2002"
        ) {
          return reply.code(409).send({ message: "Ya existe un término con ese slug" });
        }

        if (isDatabaseUnavailableError(error)) {
          return reply.code(503).send({ message: READ_ONLY_MODE_MESSAGE });
        }

        throw error;
      }
    },
  );

  app.put(
    "/:slug",
    {
      schema: {
        tags: ["Glossary"],
        summary: "Actualizar un término del glosario",
        params: {
          type: "object",
          required: ["slug"],
          properties: {
            slug: { type: "string" },
          },
        },
        body: glossaryBodySchema,
      },
    },
    async (request, reply) => {
      const { slug } = request.params as { slug: string };
      const body = request.body as SeedGlossaryItem;

      try {
        const result = await updateGlossaryItem(slug, body);

        if (!result) {
          return reply.code(404).send({ message: "Término del glosario no encontrado" });
        }

        await refreshBackupSnapshot(app.log);
        return result.item;
      } catch (error) {
        if (
          error instanceof Prisma.PrismaClientKnownRequestError &&
          error.code === "P2002"
        ) {
          return reply.code(409).send({ message: "El slug indicado ya está en uso" });
        }

        if (isDatabaseUnavailableError(error)) {
          return reply.code(503).send({ message: READ_ONLY_MODE_MESSAGE });
        }

        throw error;
      }
    },
  );

  app.delete(
    "/:slug",
    {
      schema: {
        tags: ["Glossary"],
        summary: "Eliminar un término del glosario",
        params: {
          type: "object",
          required: ["slug"],
          properties: {
            slug: { type: "string" },
          },
        },
      },
    },
    async (request, reply) => {
      const { slug } = request.params as { slug: string };

      try {
        const deleted = await deleteGlossaryItem(slug);

        if (!deleted) {
          return reply.code(404).send({ message: "Término del glosario no encontrado" });
        }

        await refreshBackupSnapshot(app.log);
        return reply.code(204).send();
      } catch (error) {
        if (isDatabaseUnavailableError(error)) {
          return reply.code(503).send({ message: READ_ONLY_MODE_MESSAGE });
        }

        throw error;
      }
    },
  );
};
