import type { FastifyPluginAsync } from "fastify";
import { Prisma } from "../generated/prisma";
import type { GuideUpsertInput } from "../domain/contracts";
import { READ_ONLY_MODE_MESSAGE, isDatabaseUnavailableError } from "../lib/database";
import {
  getGuideByCategorySlug as getGuideByCategorySlugWithFallback,
  listGuides as listGuidesWithFallback,
  refreshBackupSnapshot,
} from "../services/content";
import { buildSemanticGuideIndex } from "../services/guideSemanticIndex";
import { GUIDE_SEMANTIC_KEYS } from "../domain/guideSemantics";
import {
  createSectionForGuide,
  deleteSectionForGuide,
  mergeGuideTabsForCategory,
  replaceGuideForCategory,
  updateSectionForGuide,
} from "../services/guides";

const guideSemanticKeySchema = {
  type: "string",
  enum: GUIDE_SEMANTIC_KEYS as unknown as [string, ...string[]],
} as const;

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
          semanticKey: guideSemanticKeySchema,
          classifications: {
            type: "array",
            items: {
              type: "object",
              required: ["slug", "paragraphs"],
              additionalProperties: false,
              properties: {
                slug: { type: "string", minLength: 1 },
                subtitle: { type: "string" },
                paragraphs: {
                  type: "array",
                  items: { type: "string", minLength: 1 },
                  minItems: 1,
                },
                imageUrl: { type: "string" },
                imageAlt: { type: "string" },
                semanticKey: guideSemanticKeySchema,
              },
            },
          },
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
                semanticKey: guideSemanticKeySchema,
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
                sectionSlug: { type: "string" },
                semanticKey: guideSemanticKeySchema,
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

const mergeTabsBodySchema = {
  type: "object",
  required: ["tabs"],
  additionalProperties: false,
  properties: {
    tabs: guideSchema.properties.tabs,
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
    semanticKey: guideSemanticKeySchema,
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

  if (error instanceof Error && error.message.startsWith("INVALID_TABLE_SECTION_SLUG:")) {
    return {
      statusCode: 400,
      message:
        "Una tabla referencia un slug de sección que no existe en su pestaña. Revisa el campo «Sección» en el admin.",
    };
  }

  if (error instanceof Error && error.message.startsWith("INVALID_GUIDE_SEMANTIC_KEY:")) {
    return {
      statusCode: 400,
      message: "Hay un valor de «tipo semántico» no reconocido. Usa solo las opciones del desplegable del admin.",
    };
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
    async () => listGuidesWithFallback(),
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
      const guide = await getGuideByCategorySlugWithFallback(categorySlug);

      if (!guide) {
        return reply.code(404).send({ message: "Guía no encontrada para esa categoría" });
      }

      return guide;
    },
  );

  app.get(
    "/:categorySlug/semantic-index",
    {
      schema: {
        tags: ["Guides"],
        summary: "Guía agrupada por tipo semántico (consumo homogéneo)",
        description:
          "Devuelve `buckets` por clave (intro, making, types, …). En vino suele bastar con asignar la clave a cada pestaña; en whisky, a secciones/tablas y filtrar con tabSlug=whisky-guia.",
        params: {
          type: "object",
          required: ["categorySlug"],
          properties: {
            categorySlug: { type: "string" },
          },
        },
        querystring: {
          type: "object",
          properties: {
            tabSlug: { type: "string" },
            semanticKey: { type: "string" },
          },
        },
      },
    },
    async (request, reply) => {
      const { categorySlug } = request.params as { categorySlug: string };
      const query = request.query as { tabSlug?: string; semanticKey?: string };
      const guide = await getGuideByCategorySlugWithFallback(categorySlug);

      if (!guide) {
        return reply.code(404).send({ message: "Guía no encontrada para esa categoría" });
      }

      return buildSemanticGuideIndex(guide, {
        tabSlug: query.tabSlug,
        semanticKey: query.semanticKey,
      });
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
        await replaceGuideForCategory(categorySlug, body);
        await refreshBackupSnapshot(app.log);
        const guide = await getGuideByCategorySlugWithFallback(categorySlug);

        if (!guide) {
          return reply.code(404).send({ message: "Guía no encontrada para esa categoría" });
        }

        return guide;
      } catch (error) {
        const handled = handleGuideError(error);
        if (handled) {
          return reply.code(handled.statusCode).send({ message: handled.message });
        }

        if (isDatabaseUnavailableError(error)) {
          return reply.code(503).send({ message: READ_ONLY_MODE_MESSAGE });
        }

        throw error;
      }
    },
  );

  app.patch(
    "/:categorySlug/tabs",
    {
      schema: {
        tags: ["Guides"],
        summary: "Fusionar pestañas en una guía (por slug)",
        description:
          "Sustituye pestañas cuyo slug coincida con el cuerpo o añade pestañas nuevas al final. No elimina el resto de la guía. Reindexa posiciones en orden.",
        params: {
          type: "object",
          required: ["categorySlug"],
          properties: {
            categorySlug: { type: "string" },
          },
        },
        body: mergeTabsBodySchema,
      },
    },
    async (request, reply) => {
      const { categorySlug } = request.params as { categorySlug: string };
      const body = request.body as { tabs: GuideUpsertInput["tabs"] };

      try {
        await mergeGuideTabsForCategory(categorySlug, body.tabs);
        await refreshBackupSnapshot(app.log);
        const guide = await getGuideByCategorySlugWithFallback(categorySlug);

        if (!guide) {
          return reply.code(404).send({ message: "Guía no encontrada para esa categoría" });
        }

        return guide;
      } catch (error) {
        const handled = handleGuideError(error);
        if (handled) {
          return reply.code(handled.statusCode).send({ message: handled.message });
        }

        if (isDatabaseUnavailableError(error)) {
          return reply.code(503).send({ message: READ_ONLY_MODE_MESSAGE });
        }

        if (error instanceof Error && error.message.startsWith("CATEGORY_NOT_FOUND:")) {
          return reply.code(404).send({ message: "Categoría no encontrada" });
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
        await refreshBackupSnapshot(app.log);
        const guide = await getGuideByCategorySlugWithFallback(categorySlug);

        if (!guide) {
          return reply.code(404).send({ message: "Guía no encontrada para esa categoría" });
        }

        return reply.code(201).send(guide);
      } catch (error) {
        const handled = handleGuideError(error);
        if (handled) {
          return reply.code(handled.statusCode).send({ message: handled.message });
        }

        if (isDatabaseUnavailableError(error)) {
          return reply.code(503).send({ message: READ_ONLY_MODE_MESSAGE });
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

        await refreshBackupSnapshot(app.log);
        const guide = await getGuideByCategorySlugWithFallback(categorySlug);

        if (!guide) {
          return reply.code(404).send({ message: "Guía no encontrada para esa categoría" });
        }

        return guide;
      } catch (error) {
        const handled = handleGuideError(error);
        if (handled) {
          return reply.code(handled.statusCode).send({ message: handled.message });
        }

        if (isDatabaseUnavailableError(error)) {
          return reply.code(503).send({ message: READ_ONLY_MODE_MESSAGE });
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

      try {
        const deleted = await deleteSectionForGuide(categorySlug, sectionId);

        if (!deleted) {
          return reply.code(404).send({ message: "Sección no encontrada" });
        }

        await refreshBackupSnapshot(app.log);
        const guide = await getGuideByCategorySlugWithFallback(categorySlug);

        if (!guide) {
          return reply.code(404).send({ message: "Guía no encontrada para esa categoría" });
        }

        return guide;
      } catch (error) {
        const handled = handleGuideError(error);
        if (handled) {
          return reply.code(handled.statusCode).send({ message: handled.message });
        }

        if (isDatabaseUnavailableError(error)) {
          return reply.code(503).send({ message: READ_ONLY_MODE_MESSAGE });
        }

        throw error;
      }
    },
  );
};
