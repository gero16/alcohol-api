import type { FastifyPluginAsync } from "fastify";
import alcoholData from "../content/alcohol-data.json";
import type { SeedDataset } from "../domain/contracts";

const dataset = alcoholData as SeedDataset;

export const glossaryRoutes: FastifyPluginAsync = async (app) => {
  app.get(
    "/",
    {
      schema: {
        tags: ["Glossary"],
        summary: "Listar términos del glosario básico",
      },
    },
    async () =>
      dataset.glossary.map((item) => ({
        ...item,
        details: [...item.details],
        relatedCategories: [...item.relatedCategories],
      })),
  );
};
