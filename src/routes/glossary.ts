import type { FastifyPluginAsync } from "fastify";
import { listGlossary } from "../services/content";

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
};
