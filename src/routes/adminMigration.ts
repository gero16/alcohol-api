import type { FastifyPluginAsync } from "fastify";
import alcoholData from "../content/alcohol-data.json";
import { exportBackupDataset, getBackupFilePath } from "../content/backup";
import type { SeedDataset } from "../domain/contracts";
import { READ_ONLY_MODE_MESSAGE, isDatabaseUnavailableError } from "../lib/database";
import { replaceGlossaryItems } from "../services/glossary";

const dataset = alcoholData as SeedDataset;

export const adminMigrationRoutes: FastifyPluginAsync = async (app) => {
  app.post(
    "/glossary/import",
    {
      schema: {
        tags: ["Admin"],
        summary: "Importar el glosario legacy a la base de datos",
      },
    },
    async (_request, reply) => {
      try {
        const result = await replaceGlossaryItems(dataset.glossary);
        await exportBackupDataset();

        return reply.code(200).send({
          message: "Glosario importado correctamente desde el dataset legacy.",
          importedItemsCount: result.importedItemsCount,
          linkedCategoriesCount: result.linkedCategoriesCount,
          skippedCategoryLinksCount: result.skippedCategoryLinksCount,
          backupFilePath: getBackupFilePath(),
        });
      } catch (error) {
        if (isDatabaseUnavailableError(error)) {
          return reply.code(503).send({ message: READ_ONLY_MODE_MESSAGE });
        }

        throw error;
      }
    },
  );

  app.post(
    "/backup/export",
    {
      schema: {
        tags: ["Admin"],
        summary: "Exportar un respaldo JSON completo desde la base de datos",
      },
    },
    async (_request, reply) => {
      try {
        const backup = await exportBackupDataset();

        return reply.code(200).send({
          message: "Respaldo JSON exportado correctamente desde la base de datos.",
          categoriesCount: backup.categories.length,
          guidesCount: backup.guides.length,
          glossaryCount: backup.glossary.length,
          backupFilePath: getBackupFilePath(),
        });
      } catch (error) {
        if (isDatabaseUnavailableError(error)) {
          return reply.code(503).send({ message: READ_ONLY_MODE_MESSAGE });
        }

        throw error;
      }
    },
  );
};
