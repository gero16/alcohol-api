import type { FastifyPluginAsync } from "fastify";
import { Prisma } from "../generated/prisma";
import { READ_ONLY_MODE_MESSAGE, isDatabaseUnavailableError } from "../lib/database";
import { getPrismaOrThrow } from "../lib/prisma";
import { getCategoryBySlug, listCategories, refreshBackupSnapshot } from "../services/content";

const categoryBodySchema = {
  type: "object",
  required: ["slug", "position", "title", "summary", "abv", "origin", "imageUrl", "imageAlt"],
  additionalProperties: false,
  properties: {
    slug: { type: "string", minLength: 1 },
    position: { type: "number" },
    title: { type: "string", minLength: 1 },
    summary: { type: "string", minLength: 1 },
    abv: { type: "string", minLength: 1 },
    origin: { type: "string", minLength: 1 },
    imageUrl: { type: "string", minLength: 1 },
    imageAlt: { type: "string", minLength: 1 },
  },
} as const;

export const categoriesRoutes: FastifyPluginAsync = async (app) => {
  app.get(
    "/",
    {
      schema: {
        tags: ["Categories"],
        summary: "Listar categorías",
      },
    },
    async () => listCategories(),
  );

  app.get(
    "/:slug",
    {
      schema: {
        tags: ["Categories"],
        summary: "Obtener una categoría por slug",
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
      const category = await getCategoryBySlug(slug);

      if (!category) {
        return reply.code(404).send({ message: "Categoría no encontrada" });
      }

      return category;
    },
  );

  app.post(
    "/",
    {
      schema: {
        tags: ["Categories"],
        summary: "Crear una categoría",
        body: categoryBodySchema,
      },
    },
    async (request, reply) => {
      const body = request.body as Prisma.CategoryCreateInput;

      try {
        const prisma = getPrismaOrThrow();
        const category = await prisma.category.create({
          data: body,
          include: { guide: true },
        });
        await refreshBackupSnapshot(app.log);

        return reply.code(201).send({
          id: category.id,
          slug: category.slug,
          position: category.position,
          title: category.title,
          summary: category.summary,
          abv: category.abv,
          origin: category.origin,
          imageUrl: category.imageUrl,
          imageAlt: category.imageAlt,
          hasGuide: Boolean(category.guide),
        });
      } catch (error) {
        if (
          error instanceof Prisma.PrismaClientKnownRequestError &&
          error.code === "P2002"
        ) {
          return reply.code(409).send({ message: "Ya existe una categoría con ese slug" });
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
        tags: ["Categories"],
        summary: "Actualizar una categoría",
        params: {
          type: "object",
          required: ["slug"],
          properties: {
            slug: { type: "string" },
          },
        },
        body: categoryBodySchema,
      },
    },
    async (request, reply) => {
      const { slug } = request.params as { slug: string };
      const body = request.body as Prisma.CategoryUpdateInput;

      try {
        const prisma = getPrismaOrThrow();
        const category = await prisma.category.update({
          where: { slug },
          data: body,
          include: { guide: true },
        });
        await refreshBackupSnapshot(app.log);

        return {
          id: category.id,
          slug: category.slug,
          position: category.position,
          title: category.title,
          summary: category.summary,
          abv: category.abv,
          origin: category.origin,
          imageUrl: category.imageUrl,
          imageAlt: category.imageAlt,
          hasGuide: Boolean(category.guide),
        };
      } catch (error) {
        if (
          error instanceof Prisma.PrismaClientKnownRequestError &&
          error.code === "P2025"
        ) {
          return reply.code(404).send({ message: "Categoría no encontrada" });
        }

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
        tags: ["Categories"],
        summary: "Eliminar una categoría",
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
        const prisma = getPrismaOrThrow();
        await prisma.category.delete({
          where: { slug },
        });
        await refreshBackupSnapshot(app.log);

        return reply.code(204).send();
      } catch (error) {
        if (
          error instanceof Prisma.PrismaClientKnownRequestError &&
          error.code === "P2025"
        ) {
          return reply.code(404).send({ message: "Categoría no encontrada" });
        }

        if (isDatabaseUnavailableError(error)) {
          return reply.code(503).send({ message: READ_ONLY_MODE_MESSAGE });
        }

        throw error;
      }
    },
  );
};
