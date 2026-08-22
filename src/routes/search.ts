import type { FastifyPluginAsync } from "fastify";
import { isDatabaseUnavailableError } from "../lib/database";
import { searchContent } from "../services/search";

export const searchRoutes: FastifyPluginAsync = async (app) => {
  app.get(
    "/",
    {
      schema: {
        tags: ["Search"],
        summary: "Buscar en categorías, guías, glosario y productos",
        querystring: {
          type: "object",
          required: ["q"],
          properties: {
            q: { type: "string", minLength: 1 },
          },
        },
      },
    },
    async (request, reply) => {
      const { q } = request.query as { q: string };

      try {
        return await searchContent(q);
      } catch (error) {
        if (isDatabaseUnavailableError(error)) {
          return reply.code(503).send({
            message: "La búsqueda no está disponible: base de datos inaccesible.",
          });
        }
        throw error;
      }
    },
  );
};
