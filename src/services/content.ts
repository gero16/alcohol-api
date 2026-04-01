import type { FastifyBaseLogger } from "fastify";
import type { ApiCategory, ApiGlossaryItem, ApiGuideDetail, ApiGuideSummary } from "../domain/contracts";
import {
  exportBackupDataset,
  getCategoryFromBackup,
  getCategoryFromDatabase,
  getGuideDetailFromBackup,
  getGuideDetailFromDatabase,
  listCategoriesFromBackup,
  listCategoriesFromDatabase,
  listGlossaryFromBackup,
  listGlossaryFromDatabase,
  listGuideDetailsFromBackup,
  listGuideDetailsFromDatabase,
  listGuideSummariesFromBackup,
  listGuideSummariesFromDatabase,
  loadBackupDataset,
} from "../content/backup";
import { isDatabaseUnavailableError } from "../lib/database";

async function withBackupFallback<T>(loadFromDatabase: () => Promise<T>, loadFromBackup: () => Promise<T>) {
  try {
    return await loadFromDatabase();
  } catch (error) {
    if (!isDatabaseUnavailableError(error)) {
      throw error;
    }

    return loadFromBackup();
  }
}

export async function refreshBackupSnapshot(logger?: FastifyBaseLogger) {
  try {
    await exportBackupDataset();
  } catch (error) {
    logger?.warn({ err: error }, "No se pudo actualizar el respaldo JSON.");
  }
}

export async function listCategories(): Promise<ApiCategory[]> {
  return withBackupFallback(listCategoriesFromDatabase, async () => {
    const dataset = await loadBackupDataset();
    return listCategoriesFromBackup(dataset);
  });
}

export async function getCategoryBySlug(slug: string): Promise<ApiCategory | null> {
  return withBackupFallback(() => getCategoryFromDatabase(slug), async () => {
    const dataset = await loadBackupDataset();
    return getCategoryFromBackup(dataset, slug);
  });
}

export async function listGuides(): Promise<ApiGuideSummary[]> {
  return withBackupFallback(listGuideSummariesFromDatabase, async () => {
    const dataset = await loadBackupDataset();
    return listGuideSummariesFromBackup(dataset);
  });
}

export async function getGuideByCategorySlug(categorySlug: string): Promise<ApiGuideDetail | null> {
  return withBackupFallback(() => getGuideDetailFromDatabase(categorySlug), async () => {
    const dataset = await loadBackupDataset();
    return getGuideDetailFromBackup(dataset, categorySlug);
  });
}

export async function listGuideDetails(): Promise<ApiGuideDetail[]> {
  return withBackupFallback(listGuideDetailsFromDatabase, async () => {
    const dataset = await loadBackupDataset();
    return listGuideDetailsFromBackup(dataset);
  });
}

export async function listGlossary(): Promise<ApiGlossaryItem[]> {
  return withBackupFallback(listGlossaryFromDatabase, async () => {
    const dataset = await loadBackupDataset();
    return listGlossaryFromBackup(dataset);
  });
}
