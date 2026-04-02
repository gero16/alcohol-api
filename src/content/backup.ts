import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type {
  ApiCategory,
  ApiGlossaryItem,
  ApiGuideDetail,
  ApiGuideSummary,
  SeedDataset,
  SeedGuide,
  SeedGuideTab,
  SeedGlossaryItem,
  TableColumn,
} from "../domain/contracts";
import {
  glossaryItemInclude,
  guideDetailInclude,
  toApiGlossaryItem,
  toApiGuideDetail,
  toApiGuideSummary,
  type GlossaryItemRecord,
  type GuideDetailRecord,
} from "../domain/serializers";
import { getPrismaOrThrow } from "../lib/prisma";

const BACKUP_FILE_PATH = path.resolve(__dirname, "generated-backup.json");

function toBackupId(...parts: string[]) {
  return `backup:${parts.join(":")}`;
}

function toApiCategoryFromDatasetCategory(
  category: SeedDataset["categories"][number],
  dataset: SeedDataset,
): ApiCategory {
  return {
    id: toBackupId("category", category.slug),
    slug: category.slug,
    position: category.position,
    title: category.title,
    summary: category.summary,
    abv: category.abv,
    origin: category.origin,
    imageUrl: category.imageUrl,
    imageAlt: category.imageAlt,
    hasGuide: dataset.guides.some((guide) => guide.categorySlug === category.slug),
  };
}

function toApiGuideDetailFromSeed(guide: SeedGuide, dataset: SeedDataset): ApiGuideDetail {
  const category = dataset.categories.find((item) => item.slug === guide.categorySlug);

  if (!category) {
    throw new Error(`BACKUP_CATEGORY_NOT_FOUND:${guide.categorySlug}`);
  }

  return {
    id: toBackupId("guide", guide.categorySlug),
    category: toApiCategoryFromDatasetCategory(category, dataset),
    title: guide.title,
    type: guide.type,
    tabs: guide.tabs.map((tab) => ({
      id: toBackupId("guide-tab", guide.categorySlug, tab.slug),
      slug: tab.slug,
      label: tab.label,
      panelTitle: tab.panelTitle,
      noteTitle: tab.noteTitle,
      noteContent: tab.noteContent,
      semanticKey: tab.semanticKey,
      sections: (tab.sections ?? []).map((section) => ({
        id: toBackupId("guide-section", guide.categorySlug, tab.slug, section.slug),
        slug: section.slug,
        title: section.title,
        subtitle: section.subtitle,
        imageUrl: section.imageUrl,
        imageAlt: section.imageAlt,
        semanticKey: section.semanticKey,
        paragraphs: [...section.paragraphs],
      })),
      tables: (tab.tables ?? []).map((table) => ({
        id: toBackupId("guide-table", guide.categorySlug, tab.slug, table.slug),
        slug: table.slug,
        title: table.title,
        displayMode: table.rows.some((row) => row.imageUrl) ? "cards" : "table",
        sectionSlug: table.sectionSlug,
        semanticKey: table.semanticKey,
        columns: table.columns,
        rows: table.rows.map((row, rowIndex) => ({
          id: toBackupId("guide-table-row", guide.categorySlug, tab.slug, table.slug, String(rowIndex)),
          term: row.term,
          composition: row.composition,
          objective: row.objective,
          description: row.description,
          reference: row.reference,
          abv: row.abv,
          imageUrl: row.imageUrl,
          imageAlt: row.imageAlt,
        })),
      })),
    })),
  };
}

function toApiGuideSummaryFromSeed(guide: SeedGuide, dataset: SeedDataset): ApiGuideSummary {
  const category = dataset.categories.find((item) => item.slug === guide.categorySlug);

  if (!category) {
    throw new Error(`BACKUP_CATEGORY_NOT_FOUND:${guide.categorySlug}`);
  }

  return {
    id: toBackupId("guide", guide.categorySlug),
    categorySlug: guide.categorySlug,
    categoryTitle: category.title,
    title: guide.title,
    type: guide.type,
    tabsCount: guide.tabs.length,
  };
}

function toSeedGuideFromRecord(guide: GuideDetailRecord): SeedGuide {
  return {
    categorySlug: guide.category.slug,
    title: guide.title,
    type: guide.type,
    tabs: guide.tabs.map(
      (tab): SeedGuideTab => ({
        slug: tab.slug,
        label: tab.label,
        position: tab.position,
        panelTitle: tab.panelTitle ?? undefined,
        noteTitle: tab.noteTitle ?? undefined,
        noteContent: tab.noteContent ?? undefined,
        semanticKey: tab.semanticKey ?? undefined,
        sections: tab.sections.map((section) => ({
          slug: section.slug,
          title: section.title,
          subtitle: section.subtitle,
          imageUrl: section.imageUrl,
          imageAlt: section.imageAlt,
          semanticKey: section.semanticKey ?? undefined,
          paragraphs: section.paragraphs.map((paragraph) => paragraph.content),
        })),
        tables: tab.tables.map((table) => ({
          slug: table.slug,
          title: table.title,
          sectionSlug: table.sectionSlug ?? undefined,
          semanticKey: table.semanticKey ?? undefined,
          columns: table.columns as TableColumn[],
          rows: table.rows.map((row) => ({
            term: row.term,
            composition: row.composition ?? undefined,
            objective: row.objective ?? undefined,
            description: row.description ?? undefined,
            reference: row.reference ?? undefined,
            abv: row.abv ?? undefined,
            imageUrl: row.imageUrl ?? undefined,
            imageAlt: row.imageAlt ?? undefined,
          })),
        })),
      }),
    ),
  };
}

function toSeedGlossaryItemFromRecord(item: GlossaryItemRecord): SeedGlossaryItem {
  return {
    slug: item.slug,
    term: item.term,
    shortDefinition: item.shortDefinition,
    details: item.details.map((detail) => detail.content),
    relatedCategories: item.relatedCategories.map((link) => link.category.slug),
    featured: item.featured || undefined,
  };
}

export function getBackupFilePath() {
  return BACKUP_FILE_PATH;
}

export async function loadBackupDataset(): Promise<SeedDataset> {
  const rawContent = await readFile(BACKUP_FILE_PATH, "utf8");
  return JSON.parse(rawContent) as SeedDataset;
}

export async function writeBackupDataset(dataset: SeedDataset) {
  await mkdir(path.dirname(BACKUP_FILE_PATH), { recursive: true });
  await writeFile(BACKUP_FILE_PATH, `${JSON.stringify(dataset, null, 2)}\n`, "utf8");
}

export async function buildSeedDatasetFromDatabase(): Promise<SeedDataset> {
  const prisma = getPrismaOrThrow();

  const [categories, guides, glossary] = await Promise.all([
    prisma.category.findMany({
      orderBy: { position: "asc" },
    }),
    prisma.guide.findMany({
      include: guideDetailInclude,
    }),
    prisma.glossaryItem.findMany({
      include: glossaryItemInclude,
      orderBy: { term: "asc" },
    }),
  ]);

  return {
    categories: categories.map((category) => ({
      slug: category.slug,
      position: category.position,
      title: category.title,
      summary: category.summary,
      abv: category.abv,
      origin: category.origin,
      imageUrl: category.imageUrl,
      imageAlt: category.imageAlt,
    })),
    guides: guides
      .slice()
      .sort((left, right) => left.category.position - right.category.position)
      .map(toSeedGuideFromRecord),
    glossary: glossary.map(toSeedGlossaryItemFromRecord),
  };
}

export async function exportBackupDataset() {
  const dataset = await buildSeedDatasetFromDatabase();
  await writeBackupDataset(dataset);
  return dataset;
}

export function listCategoriesFromBackup(dataset: SeedDataset): ApiCategory[] {
  return dataset.categories
    .slice()
    .sort((left, right) => left.position - right.position)
    .map((category) => toApiCategoryFromDatasetCategory(category, dataset));
}

export function getCategoryFromBackup(dataset: SeedDataset, slug: string): ApiCategory | null {
  const category = dataset.categories.find((item) => item.slug === slug);
  return category ? toApiCategoryFromDatasetCategory(category, dataset) : null;
}

export function listGuideSummariesFromBackup(dataset: SeedDataset): ApiGuideSummary[] {
  return dataset.guides
    .slice()
    .sort((left, right) => {
      const leftPosition = dataset.categories.find((category) => category.slug === left.categorySlug)?.position ?? 0;
      const rightPosition =
        dataset.categories.find((category) => category.slug === right.categorySlug)?.position ?? 0;

      return leftPosition - rightPosition;
    })
    .map((guide) => toApiGuideSummaryFromSeed(guide, dataset));
}

export function getGuideDetailFromBackup(dataset: SeedDataset, categorySlug: string): ApiGuideDetail | null {
  const guide = dataset.guides.find((item) => item.categorySlug === categorySlug);
  return guide ? toApiGuideDetailFromSeed(guide, dataset) : null;
}

export function listGuideDetailsFromBackup(dataset: SeedDataset): ApiGuideDetail[] {
  return dataset.guides
    .slice()
    .sort((left, right) => {
      const leftPosition = dataset.categories.find((category) => category.slug === left.categorySlug)?.position ?? 0;
      const rightPosition =
        dataset.categories.find((category) => category.slug === right.categorySlug)?.position ?? 0;

      return leftPosition - rightPosition;
    })
    .map((guide) => toApiGuideDetailFromSeed(guide, dataset));
}

export function listGlossaryFromBackup(dataset: SeedDataset): ApiGlossaryItem[] {
  return dataset.glossary
    .slice()
    .sort((left, right) => left.term.localeCompare(right.term, "es"))
    .map((item) => ({
      ...item,
      details: [...item.details],
      relatedCategories: [...item.relatedCategories],
      featured: item.featured || undefined,
    }));
}

export function getGlossaryItemFromBackup(dataset: SeedDataset, slug: string): ApiGlossaryItem | null {
  const item = dataset.glossary.find((entry) => entry.slug === slug);

  if (!item) {
    return null;
  }

  return {
    ...item,
    details: [...item.details],
    relatedCategories: [...item.relatedCategories],
    featured: item.featured || undefined,
  };
}

export async function listGlossaryFromDatabase(): Promise<ApiGlossaryItem[]> {
  const prisma = getPrismaOrThrow();
  const glossary = await prisma.glossaryItem.findMany({
    include: glossaryItemInclude,
    orderBy: { term: "asc" },
  });

  return glossary.map(toApiGlossaryItem);
}

export async function getGlossaryItemFromDatabase(slug: string): Promise<ApiGlossaryItem | null> {
  const prisma = getPrismaOrThrow();
  const item = await prisma.glossaryItem.findUnique({
    where: { slug },
    include: glossaryItemInclude,
  });

  return item ? toApiGlossaryItem(item) : null;
}

export async function listGuideSummariesFromDatabase(): Promise<ApiGuideSummary[]> {
  const prisma = getPrismaOrThrow();
  const guides = await prisma.guide.findMany({
    include: {
      category: true,
      tabs: true,
    },
    orderBy: {
      category: {
        position: "asc",
      },
    },
  });

  return guides.map(toApiGuideSummary);
}

export async function getGuideDetailFromDatabase(categorySlug: string): Promise<ApiGuideDetail | null> {
  const prisma = getPrismaOrThrow();
  const guide = await prisma.guide.findFirst({
    where: {
      category: {
        slug: categorySlug,
      },
    },
    include: guideDetailInclude,
  });

  return guide ? toApiGuideDetail(guide) : null;
}

export async function listGuideDetailsFromDatabase(): Promise<ApiGuideDetail[]> {
  const prisma = getPrismaOrThrow();
  const guides = await prisma.guide.findMany({
    include: guideDetailInclude,
  });

  return guides
    .slice()
    .sort((left, right) => left.category.position - right.category.position)
    .map(toApiGuideDetail);
}

export async function listCategoriesFromDatabase(): Promise<ApiCategory[]> {
  const prisma = getPrismaOrThrow();
  const categories = await prisma.category.findMany({
    include: { guide: true },
    orderBy: { position: "asc" },
  });

  return categories.map((category) => ({
    id: category.id,
    slug: category.slug,
    position: category.position,
    title: category.title,
    summary: category.summary,
    abv: category.abv,
    origin: category.origin,
    imageUrl: category.imageUrl,
    imageAlt: category.imageAlt,
    hasGuide: Boolean(category.guide),
  }));
}

export async function getCategoryFromDatabase(slug: string): Promise<ApiCategory | null> {
  const prisma = getPrismaOrThrow();
  const category = await prisma.category.findUnique({
    where: { slug },
    include: { guide: true },
  });

  if (!category) {
    return null;
  }

  return {
    id: category.id,
    slug: category.slug,
    position: category.position,
    title: category.title,
    summary: category.summary,
    abv: category.abv,
    origin: category.origin,
    imageUrl: category.imageUrl,
    imageAlt: category.imageAlt,
    hasGuide: Boolean(category.guide),
  };
}
