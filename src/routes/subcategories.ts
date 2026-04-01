import type { FastifyPluginAsync } from "fastify";
import { getSubcategoryBySlug } from "../services/subcategories";

export const subcategoriesRoutes: FastifyPluginAsync = async (app) => {
  app.get(
    "/:slug",
    {
      schema: {
        tags: ["Subcategories"],
        summary: "Obtener una subcategoría por slug",
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
      const subcategory = await getSubcategoryBySlug(slug);

      if (!subcategory) {
        return reply.code(404).send({ message: "Subcategoría no encontrada" });
      }

      return subcategory;
    },
  );
};
