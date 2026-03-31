import type { FastifyPluginAsync } from "fastify";
import { Prisma } from "../generated/prisma";
import { toApiCategory } from "../domain/serializers";
import { prisma } from "../lib/prisma";

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
    async () => {
      const categories = await prisma.category.findMany({
        include: { guide: true },
        orderBy: { position: "asc" },
      });

      return categories.map(toApiCategory);
    },
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
      const category = await prisma.category.findUnique({
        where: { slug },
        include: { guide: true },
      });

      if (!category) {
        return reply.code(404).send({ message: "Categoría no encontrada" });
      }

      return toApiCategory(category);
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
        const category = await prisma.category.create({
          data: body,
          include: { guide: true },
        });

        return reply.code(201).send(toApiCategory(category));
      } catch (error) {
        if (
          error instanceof Prisma.PrismaClientKnownRequestError &&
          error.code === "P2002"
        ) {
          return reply.code(409).send({ message: "Ya existe una categoría con ese slug" });
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
        const category = await prisma.category.update({
          where: { slug },
          data: body,
          include: { guide: true },
        });

        return toApiCategory(category);
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
        await prisma.category.delete({
          where: { slug },
        });

        return reply.code(204).send();
      } catch (error) {
        if (
          error instanceof Prisma.PrismaClientKnownRequestError &&
          error.code === "P2025"
        ) {
          return reply.code(404).send({ message: "Categoría no encontrada" });
        }

        throw error;
      }
    },
  );
};
