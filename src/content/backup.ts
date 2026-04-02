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
        classifications: tab.classifications.map((c) => ({
          slug: c.slug,
          subtitle: c.subtitle,
          body: c.body,
          imageUrl: c.imageUrl || undefined,
          imageAlt: c.imageAlt || undefined,
          semanticKey: c.semanticKey ?? undefined,
        })),
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

/** Volcado lógico desde PostgreSQL (p. ej. métricas admin o dump por stdout). No escribe archivos. */
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
