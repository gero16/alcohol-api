import type { FastifyPluginAsync } from "fastify";
import { Prisma } from "../generated/prisma";
import type { GuideUpsertInput } from "../domain/contracts";
import { toApiGuideDetail, toApiGuideSummary } from "../domain/serializers";
import {
  createSectionForGuide,
  deleteSectionForGuide,
  getGuideByCategorySlug,
  listGuides,
  replaceGuideForCategory,
  updateSectionForGuide,
} from "../services/guides";

const tableColumnSchema = {
  type: "object",
  required: ["key", "label"],
  additionalProperties: false,
  properties: {
    key: {
      type: "string",
      enum: ["term", "composition", "objective", "description", "reference", "abv"],
    },
    label: { type: "string", minLength: 1 },
  },
} as const;

const tableRowSchema = {
  type: "object",
  required: ["term"],
  additionalProperties: false,
  properties: {
    term: { type: "string", minLength: 1 },
    composition: { type: "string" },
    objective: { type: "string" },
    description: { type: "string" },
    reference: { type: "string" },
    abv: { type: "string" },
    imageUrl: { type: "string" },
    imageAlt: { type: "string" },
  },
} as const;

const guideSchema = {
  type: "object",
  required: ["title", "type", "tabs"],
  additionalProperties: false,
  properties: {
    title: { type: "string", minLength: 1 },
    type: { type: "string", minLength: 1 },
    tabs: {
      type: "array",
      items: {
        type: "object",
        required: ["slug", "label"],
        additionalProperties: false,
        properties: {
          slug: { type: "string", minLength: 1 },
          label: { type: "string", minLength: 1 },
          position: { type: "number" },
          panelTitle: { type: "string" },
          noteTitle: { type: "string" },
          noteContent: { type: "string" },
          sections: {
            type: "array",
            items: {
              type: "object",
              required: ["slug", "title", "subtitle", "imageUrl", "imageAlt", "paragraphs"],
              additionalProperties: false,
              properties: {
                slug: { type: "string", minLength: 1 },
                title: { type: "string", minLength: 1 },
                subtitle: { type: "string" },
                imageUrl: { type: "string", minLength: 1 },
                imageAlt: { type: "string", minLength: 1 },
                paragraphs: {
                  type: "array",
                  items: { type: "string", minLength: 1 },
                },
              },
            },
          },
          tables: {
            type: "array",
            items: {
              type: "object",
              required: ["slug", "title", "columns", "rows"],
              additionalProperties: false,
              properties: {
                slug: { type: "string", minLength: 1 },
                title: { type: "string", minLength: 1 },
                columns: {
                  type: "array",
                  items: tableColumnSchema,
                },
                rows: {
                  type: "array",
                  items: tableRowSchema,
                },
              },
            },
          },
        },
      },
    },
  },
} as const;

const sectionSchema = {
  type: "object",
  required: ["tabSlug", "slug", "title", "subtitle", "imageUrl", "imageAlt", "paragraphs"],
  additionalProperties: false,
  properties: {
    tabSlug: { type: "string", minLength: 1 },
    slug: { type: "string", minLength: 1 },
    title: { type: "string", minLength: 1 },
    subtitle: { type: "string" },
    imageUrl: { type: "string", minLength: 1 },
    imageAlt: { type: "string", minLength: 1 },
    position: { type: "number" },
    paragraphs: {
      type: "array",
      items: { type: "string", minLength: 1 },
    },
  },
} as const;

const sectionUpdateSchema = {
  ...sectionSchema,
  required: ["slug", "title", "subtitle", "imageUrl", "imageAlt", "paragraphs"],
} as const;

function handleGuideError(error: unknown) {
  if (
    error instanceof Prisma.PrismaClientKnownRequestError &&
    error.code === "P2002"
  ) {
    return { statusCode: 409, message: "Ya existe un registro con ese identificador" };
  }

  if (error instanceof Error && error.message.startsWith("CATEGORY_NOT_FOUND:")) {
    return { statusCode: 404, message: "Categoría no encontrada" };
  }

  if (error instanceof Error && error.message.startsWith("GUIDE_TAB_NOT_FOUND:")) {
    return { statusCode: 404, message: "Pestaña de guía no encontrada" };
  }

  return null;
}

export const guidesRoutes: FastifyPluginAsync = async (app) => {
  app.get(
    "/",
    {
      schema: {
        tags: ["Guides"],
        summary: "Listar guías disponibles",
      },
    },
    async () => {
      const guides = await listGuides();
      return guides.map(toApiGuideSummary);
    },
  );

  app.get(
    "/:categorySlug",
    {
      schema: {
        tags: ["Guides"],
        summary: "Obtener la guía completa de una categoría",
        params: {
          type: "object",
          required: ["categorySlug"],
          properties: {
            categorySlug: { type: "string" },
          },
        },
      },
    },
    async (request, reply) => {
      const { categorySlug } = request.params as { categorySlug: string };
      const guide = await getGuideByCategorySlug(categorySlug);

      if (!guide) {
        return reply.code(404).send({ message: "Guía no encontrada para esa categoría" });
      }

      return toApiGuideDetail(guide);
    },
  );

  app.put(
    "/:categorySlug",
    {
      schema: {
        tags: ["Guides"],
        summary: "Crear o reemplazar la guía de una categoría",
        params: {
          type: "object",
          required: ["categorySlug"],
          properties: {
            categorySlug: { type: "string" },
          },
        },
        body: guideSchema,
      },
    },
    async (request, reply) => {
      const { categorySlug } = request.params as { categorySlug: string };
      const body = request.body as GuideUpsertInput;

      try {
        const guide = await replaceGuideForCategory(categorySlug, body);
        return toApiGuideDetail(guide);
      } catch (error) {
        const handled = handleGuideError(error);
        if (handled) {
          return reply.code(handled.statusCode).send({ message: handled.message });
        }

        throw error;
      }
    },
  );

  app.post(
    "/:categorySlug/sections",
    {
      schema: {
        tags: ["Guides"],
        summary: "Crear una sección dentro de una pestaña de la guía",
        params: {
          type: "object",
          required: ["categorySlug"],
          properties: {
            categorySlug: { type: "string" },
          },
        },
        body: sectionSchema,
      },
    },
    async (request, reply) => {
      const { categorySlug } = request.params as { categorySlug: string };
      const body = request.body as {
        tabSlug: string;
        slug: string;
        title: string;
        subtitle: string;
        imageUrl: string;
        imageAlt: string;
        position?: number;
        paragraphs: string[];
      };

      try {
        await createSectionForGuide(categorySlug, body);
        const guide = await getGuideByCategorySlug(categorySlug);

        if (!guide) {
          return reply.code(404).send({ message: "Guía no encontrada para esa categoría" });
        }

        return reply.code(201).send(toApiGuideDetail(guide));
      } catch (error) {
        const handled = handleGuideError(error);
        if (handled) {
          return reply.code(handled.statusCode).send({ message: handled.message });
        }

        throw error;
      }
    },
  );

  app.put(
    "/:categorySlug/sections/:sectionId",
    {
      schema: {
        tags: ["Guides"],
        summary: "Actualizar una sección existente",
        params: {
          type: "object",
          required: ["categorySlug", "sectionId"],
          properties: {
            categorySlug: { type: "string" },
            sectionId: { type: "string" },
          },
        },
        body: sectionUpdateSchema,
      },
    },
    async (request, reply) => {
      const { categorySlug, sectionId } = request.params as {
        categorySlug: string;
        sectionId: string;
      };
      const body = request.body as {
        tabSlug?: string;
        slug: string;
        title: string;
        subtitle: string;
        imageUrl: string;
        imageAlt: string;
        position?: number;
        paragraphs: string[];
      };

      try {
        const section = await updateSectionForGuide(categorySlug, sectionId, body);

        if (!section) {
          return reply.code(404).send({ message: "Sección no encontrada" });
        }

        const guide = await getGuideByCategorySlug(categorySlug);

        if (!guide) {
          return reply.code(404).send({ message: "Guía no encontrada para esa categoría" });
        }

        return toApiGuideDetail(guide);
      } catch (error) {
        const handled = handleGuideError(error);
        if (handled) {
          return reply.code(handled.statusCode).send({ message: handled.message });
        }

        throw error;
      }
    },
  );

  app.delete(
    "/:categorySlug/sections/:sectionId",
    {
      schema: {
        tags: ["Guides"],
        summary: "Eliminar una sección existente",
        params: {
          type: "object",
          required: ["categorySlug", "sectionId"],
          properties: {
            categorySlug: { type: "string" },
            sectionId: { type: "string" },
          },
        },
      },
    },
    async (request, reply) => {
      const { categorySlug, sectionId } = request.params as {
        categorySlug: string;
        sectionId: string;
      };

      const deleted = await deleteSectionForGuide(categorySlug, sectionId);

      if (!deleted) {
        return reply.code(404).send({ message: "Sección no encontrada" });
      }

      const guide = await getGuideByCategorySlug(categorySlug);

      if (!guide) {
        return reply.code(404).send({ message: "Guía no encontrada para esa categoría" });
      }

      return toApiGuideDetail(guide);
    },
  );
};
