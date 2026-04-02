import type { Prisma } from "../generated/prisma";
import type {
  ApiCategory,
  ApiGuideDetail,
  ApiGlossaryItem,
  ApiGuideSummary,
  ApiSubcategoryDetail,
  ApiGuideTable,
  TableColumn,
} from "./contracts";
import { classificationBlocksFromJson } from "./classificationBlocks";

export const guideDetailInclude = {
  category: true,
  tabs: {
    orderBy: { position: "asc" },
    include: {
      classifications: {
        orderBy: { position: "asc" },
      },
      sections: {
        orderBy: { position: "asc" },
        include: {
          paragraphs: {
            orderBy: { position: "asc" },
          },
        },
      },
      tables: {
        orderBy: { position: "asc" },
        include: {
          rows: {
            orderBy: { position: "asc" },
          },
        },
      },
    },
  },
} satisfies Prisma.GuideInclude;

export type GuideDetailRecord = Prisma.GuideGetPayload<{
  include: typeof guideDetailInclude;
}>;

export type CategoryRecord = Prisma.CategoryGetPayload<{
  include: { guide: true };
}>;

export type GuideSummaryRecord = Prisma.GuideGetPayload<{
  include: {
    category: true;
    tabs: true;
  };
}>;

export const glossaryItemInclude = {
  details: {
    orderBy: { position: "asc" },
  },
  relatedCategories: {
    orderBy: { position: "asc" },
    include: {
      category: true,
    },
  },
} satisfies Prisma.GlossaryItemInclude;

export type GlossaryItemRecord = Prisma.GlossaryItemGetPayload<{
  include: typeof glossaryItemInclude;
}>;

export function toApiCategory(category: CategoryRecord): ApiCategory {
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

export function toApiGuideSummary(guide: GuideSummaryRecord): ApiGuideSummary {
  return {
    id: guide.id,
    categorySlug: guide.category.slug,
    categoryTitle: guide.category.title,
    title: guide.title,
    type: guide.type,
    tabsCount: guide.tabs.length,
  };
}

export function toApiGuideDetail(guide: GuideDetailRecord): ApiGuideDetail {
  return {
    id: guide.id,
    category: {
      id: guide.category.id,
      slug: guide.category.slug,
      position: guide.category.position,
      title: guide.category.title,
      summary: guide.category.summary,
      abv: guide.category.abv,
      origin: guide.category.origin,
      imageUrl: guide.category.imageUrl,
      imageAlt: guide.category.imageAlt,
      hasGuide: true,
    },
    title: guide.title,
    type: guide.type,
    tabs: guide.tabs.map((tab) => ({
      id: tab.id,
      slug: tab.slug,
      label: tab.label,
      panelTitle: tab.panelTitle ?? undefined,
      noteTitle: tab.noteTitle ?? undefined,
      noteContent: tab.noteContent ?? undefined,
      semanticKey: tab.semanticKey ?? undefined,
      classifications: tab.classifications.map((c) => ({
        id: c.id,
        slug: c.slug,
        blocks: classificationBlocksFromJson(c.blocks),
        semanticKey: c.semanticKey ?? undefined,
      })),
      sections: tab.sections.map((section) => ({
        id: section.id,
        slug: section.slug,
        title: section.title,
        subtitle: section.subtitle,
        imageUrl: section.imageUrl,
        imageAlt: section.imageAlt,
        semanticKey: section.semanticKey ?? undefined,
        paragraphs: section.paragraphs.map((paragraph) => paragraph.content),
      })),
      tables: tab.tables.map((table): ApiGuideTable => {
        const columns = table.columns as TableColumn[];
        const displayMode = table.rows.some((row) => row.imageUrl) ? "cards" : "table";

        return {
          id: table.id,
          slug: table.slug,
          title: table.title,
          displayMode,
          sectionSlug: table.sectionSlug ?? undefined,
          semanticKey: table.semanticKey ?? undefined,
          columns,
          rows: table.rows.map((row) => ({
            id: row.id,
            term: row.term,
            composition: row.composition ?? undefined,
            objective: row.objective ?? undefined,
            description: row.description ?? undefined,
            reference: row.reference ?? undefined,
            abv: row.abv ?? undefined,
            imageUrl: row.imageUrl ?? undefined,
            imageAlt: row.imageAlt ?? undefined,
          })),
        };
      }),
    })),
  };
}

export function toApiCategoryFromGuideDetail(guide: GuideDetailRecord): ApiCategory {
  return {
    id: guide.category.id,
    slug: guide.category.slug,
    position: guide.category.position,
    title: guide.category.title,
    summary: guide.category.summary,
    abv: guide.category.abv,
    origin: guide.category.origin,
    imageUrl: guide.category.imageUrl,
    imageAlt: guide.category.imageAlt,
    hasGuide: true,
  };
}

export function toApiSubcategoryDetail(input: {
  id: string;
  slug: string;
  label: string;
  subtitle?: string;
  imageUrl?: string;
  imageAlt?: string;
  previewText: string;
  guide: GuideDetailRecord;
  tab: ApiGuideDetail["tabs"][number];
}): ApiSubcategoryDetail {
  return {
    id: input.id,
    slug: input.slug,
    label: input.label,
    subtitle: input.subtitle,
    imageUrl: input.imageUrl,
    imageAlt: input.imageAlt,
    previewText: input.previewText,
    category: toApiCategoryFromGuideDetail(input.guide),
    guide: {
      id: input.guide.id,
      title: input.guide.title,
      type: input.guide.type,
    },
    tab: input.tab,
  };
}

export function toApiGlossaryItem(item: GlossaryItemRecord): ApiGlossaryItem {
  return {
    slug: item.slug,
    term: item.term,
    shortDefinition: item.shortDefinition,
    details: item.details.map((detail) => detail.content),
    relatedCategories: item.relatedCategories.map((link) => link.category.slug),
    featured: item.featured || undefined,
  };
}
