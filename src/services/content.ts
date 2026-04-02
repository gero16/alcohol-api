import type { FastifyBaseLogger } from "fastify";
import type { ApiCategory, ApiGlossaryItem, ApiGuideDetail, ApiGuideSummary } from "../domain/contracts";
import {
  getCategoryFromDatabase,
  getGlossaryItemFromDatabase,
  getGuideDetailFromDatabase,
  listCategoriesFromDatabase,
  listGlossaryFromDatabase,
  listGuideDetailsFromDatabase,
  listGuideSummariesFromDatabase,
} from "../content/backup";

/** Reservado por si en el futuro quieres disparar jobs tras cambios; ya no escribe JSON en disco. */
export async function refreshBackupSnapshot(_logger?: FastifyBaseLogger) {
  /* no-op: la fuente de verdad es solo PostgreSQL */
}

export async function listCategories(): Promise<ApiCategory[]> {
  return listCategoriesFromDatabase();
}

export async function getCategoryBySlug(slug: string): Promise<ApiCategory | null> {
  return getCategoryFromDatabase(slug);
}

export async function listGuides(): Promise<ApiGuideSummary[]> {
  return listGuideSummariesFromDatabase();
}

export async function getGuideByCategorySlug(categorySlug: string): Promise<ApiGuideDetail | null> {
  return getGuideDetailFromDatabase(categorySlug);
}

export async function listGuideDetails(): Promise<ApiGuideDetail[]> {
  return listGuideDetailsFromDatabase();
}

export async function listGlossary(): Promise<ApiGlossaryItem[]> {
  return listGlossaryFromDatabase();
}

export async function getGlossaryBySlug(slug: string): Promise<ApiGlossaryItem | null> {
  return getGlossaryItemFromDatabase(slug);
}
