import type { FastifyPluginAsync } from "fastify";
import { Prisma } from "../generated/prisma";
import { READ_ONLY_MODE_MESSAGE, isDatabaseUnavailableError } from "../lib/database";
import { getPrismaOrThrow } from "../lib/prisma";

const productBodySchema = {
  type: "object",
  required: ["slug", "name", "brand", "categorySlug"],
  additionalProperties: false,
  properties: {
    slug:              { type: "string", minLength: 1 },
    name:              { type: "string", minLength: 1 },
    brand:             { type: "string", minLength: 1 },
    categorySlug:      { type: "string", minLength: 1 },
    subcategorySlug:   { type: "string" },
    abv:               { type: "number" },
    origin:            { type: "string" },
    regionDetail:      { type: "string" },
    imageUrl:          { type: "string" },
    imageAlt:          { type: "string" },
    description:       { type: "string" },
    servingSuggestion: { type: "string" },
    priceRange:        { type: "string" },
    featured:          { type: "boolean" },
    tags:              { type: "array", items: { type: "string" } },
    bodyDensity:       { type: "string", enum: ["LOW","MEDIUM_LOW","MEDIUM","MEDIUM_HIGH","HIGH"] },
    mixingRatio:       { type: "string" },
    // Notas de cata
    tastingColor:      { type: "string" },
    tastingNose:       { type: "array", items: { type: "string" } },
    tastingPalate:     { type: "array", items: { type: "string" } },
    tastingFinish:     { type: "string" },
    // Whisky
    whiskyType:        { type: "string", enum: ["SINGLE_MALT","SINGLE_GRAIN","BLENDED_MALT","BLENDED_SCOTCH","BOURBON","RYE","IRISH","JAPANESE","WORLD"] },
    distillery:        { type: "string" },
    ageStatement:      { type: "string" },
    caskType:          { type: "string" },
    isPeated:          { type: "boolean" },
    // Vino
    wineType:          { type: "string", enum: ["TINTO","BLANCO","ROSADO","ESPUMOSO","DULCE","SEMI_DULCE","SEMI_SECO","FORTIFICADO"] },
    wineStyle:         { type: "string", enum: ["JOVEN","ROBLE","CRIANZA","RESERVA","GRAN_RESERVA"] },
    vintage:           { type: "number" },
    producer:          { type: "string" },
    grapes:            { type: "array", items: { type: "object", properties: { grape: { type: "string" }, percentage: { type: "number" } } } },
    // Cerveza
    beerStyle:         { type: "string" },
    ibu:               { type: "number" },
    beerColor:         { type: "string" },
    // Maridajes
    pairings:          { type: "array", items: { type: "string" } },
  },
} as const;

export const productsRoutes: FastifyPluginAsync = async (app) => {
  app.get(
    "/",
    {
      schema: {
        tags: ["Products"],
        summary: "Listar productos",
        querystring: {
          type: "object",
          properties: {
            categorySlug:    { type: "string" },
            subcategorySlug: { type: "string" },
            featured:        { type: "boolean" },
          },
        },
      },
    },
    async (request) => {
      const prisma = getPrismaOrThrow();
      const { categorySlug, subcategorySlug, featured } = request.query as {
        categorySlug?: string;
        subcategorySlug?: string;
        featured?: boolean;
      };

      return prisma.product.findMany({
        where: {
          ...(categorySlug    ? { categorySlug }    : {}),
          ...(subcategorySlug ? { subcategorySlug } : {}),
          ...(featured !== undefined ? { featured } : {}),
        },
        orderBy: [{ featured: "desc" }, { name: "asc" }],
      });
    },
  );

  app.get(
    "/:slug",
    {
      schema: {
        tags: ["Products"],
        summary: "Obtener un producto por slug",
        params: {
          type: "object",
          required: ["slug"],
          properties: { slug: { type: "string" } },
        },
      },
    },
    async (request, reply) => {
      const prisma = getPrismaOrThrow();
      const { slug } = request.params as { slug: string };

      const product = await prisma.product.findUnique({ where: { slug } });

      if (!product) {
        return reply.code(404).send({ message: "Producto no encontrado" });
      }

      return product;
    },
  );

  app.post(
    "/",
    {
      schema: {
        tags: ["Products"],
        summary: "Crear un producto",
        body: productBodySchema,
      },
    },
    async (request, reply) => {
      const body = request.body as Prisma.ProductCreateInput;

      try {
        const prisma = getPrismaOrThrow();
        const product = await prisma.product.create({ data: body });
        return reply.code(201).send(product);
      } catch (error) {
        if (
          error instanceof Prisma.PrismaClientKnownRequestError &&
          error.code === "P2002"
        ) {
          return reply.code(409).send({ message: "Ya existe un producto con ese slug" });
        }

        if (
          error instanceof Prisma.PrismaClientKnownRequestError &&
          error.code === "P2025"
        ) {
          return reply.code(404).send({ message: "La categoría indicada no existe" });
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
        tags: ["Products"],
        summary: "Actualizar un producto",
        params: {
          type: "object",
          required: ["slug"],
          properties: { slug: { type: "string" } },
        },
        body: productBodySchema,
      },
    },
    async (request, reply) => {
      const { slug } = request.params as { slug: string };
      const body = request.body as Prisma.ProductUpdateInput;

      try {
        const prisma = getPrismaOrThrow();
        const product = await prisma.product.update({ where: { slug }, data: body });
        return product;
      } catch (error) {
        if (
          error instanceof Prisma.PrismaClientKnownRequestError &&
          error.code === "P2025"
        ) {
          return reply.code(404).send({ message: "Producto no encontrado" });
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
        tags: ["Products"],
        summary: "Eliminar un producto",
        params: {
          type: "object",
          required: ["slug"],
          properties: { slug: { type: "string" } },
        },
      },
    },
    async (request, reply) => {
      const { slug } = request.params as { slug: string };

      try {
        const prisma = getPrismaOrThrow();
        await prisma.product.delete({ where: { slug } });
        return reply.code(204).send();
      } catch (error) {
        if (
          error instanceof Prisma.PrismaClientKnownRequestError &&
          error.code === "P2025"
        ) {
          return reply.code(404).send({ message: "Producto no encontrado" });
        }

        if (isDatabaseUnavailableError(error)) {
          return reply.code(503).send({ message: READ_ONLY_MODE_MESSAGE });
        }

        throw error;
      }
    },
  );
};
