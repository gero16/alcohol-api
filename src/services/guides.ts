import { Prisma } from "../generated/prisma";
import type {
  GuideUpsertInput,
  SeedGuideSection,
  SeedGuideTab,
  SeedGuideTable,
  TableColumn,
} from "../domain/contracts";
import { parseGuideSemanticKey, assertGuideSemanticKeysInPayload } from "../domain/guideSemantics";
import { guideDetailInclude, type GuideDetailRecord } from "../domain/serializers";
import { getPrismaOrThrow } from "../lib/prisma";

type SectionMutationInput = SeedGuideSection & {
  tabSlug?: string;
  position?: number;
};

function toGuideTabCreate(tab: SeedGuideTab): Prisma.GuideTabCreateWithoutGuideInput {
  return {
    slug: tab.slug,
    label: tab.label,
    panelTitle: tab.panelTitle,
    noteTitle: tab.noteTitle,
    noteContent: tab.noteContent,
    position: tab.position,
    semanticKey: parseGuideSemanticKey(tab.semanticKey),
    sections: {
      create: (tab.sections ?? []).map((section, index) => ({
        slug: section.slug,
        title: section.title,
        subtitle: section.subtitle,
        imageUrl: section.imageUrl,
        imageAlt: section.imageAlt,
        position: index,
        semanticKey: parseGuideSemanticKey(section.semanticKey),
        paragraphs: {
          create: section.paragraphs.map((content, paragraphIndex) => ({
            content,
            position: paragraphIndex,
          })),
        },
      })),
    },
    tables: {
      create: (tab.tables ?? []).map((table, index) => toGuideTableCreate(table, index)),
    },
  };
}

function toGuideTableCreate(
  table: SeedGuideTable,
  index: number,
): Prisma.GuideTableCreateWithoutTabInput {
  const sectionSlug = table.sectionSlug?.trim();
  return {
    slug: table.slug,
    title: table.title,
    columns: table.columns,
    position: index,
    sectionSlug: sectionSlug && sectionSlug.length > 0 ? sectionSlug : null,
    semanticKey: parseGuideSemanticKey(table.semanticKey),
    rows: {
      create: table.rows.map((row, rowIndex) => ({
        term: row.term,
        composition: row.composition,
        objective: row.objective,
        description: row.description,
        reference: row.reference,
        abv: row.abv,
        imageUrl: row.imageUrl,
        imageAlt: row.imageAlt,
        position: rowIndex,
      })),
    },
  };
}

async function requireCategory(slug: string) {
  const prisma = getPrismaOrThrow();
  const category = await prisma.category.findUnique({
    where: { slug },
    select: { id: true, slug: true, title: true },
  });

  if (!category) {
    throw new Error(`CATEGORY_NOT_FOUND:${slug}`);
  }

  return category;
}

async function requireGuideTab(categorySlug: string, tabSlug: string) {
  const prisma = getPrismaOrThrow();
  const tab = await prisma.guideTab.findFirst({
    where: {
      slug: tabSlug,
      guide: {
        category: {
          slug: categorySlug,
        },
      },
    },
    include: {
      guide: {
        include: {
          category: true,
        },
      },
    },
  });

  if (!tab) {
    throw new Error(`GUIDE_TAB_NOT_FOUND:${categorySlug}:${tabSlug}`);
  }

  return tab;
}

export async function listGuides() {
  const prisma = getPrismaOrThrow();
  return prisma.guide.findMany({
    include: {
      category: true,
      tabs: {
        orderBy: { position: "asc" },
      },
    },
    orderBy: {
      category: {
        title: "asc",
      },
    },
  });
}

export async function getGuideByCategorySlug(categorySlug: string) {
  const prisma = getPrismaOrThrow();
  return prisma.guide.findFirst({
    where: {
      category: {
        slug: categorySlug,
      },
    },
    include: guideDetailInclude,
  });
}

function guideRecordToUpsertInput(record: GuideDetailRecord): GuideUpsertInput {
  return {
    title: record.title,
    type: record.type,
    tabs: record.tabs.map((tab, tabIndex) => ({
      slug: tab.slug,
      label: tab.label,
      position: tabIndex,
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
        paragraphs: section.paragraphs.map((p) => p.content),
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
    })),
  };
}

function assertTableSectionSlugsMatchTabs(payload: GuideUpsertInput) {
  for (const tab of payload.tabs) {
    const sectionSlugs = new Set((tab.sections ?? []).map((s) => s.slug.trim()).filter(Boolean));
    for (const table of tab.tables ?? []) {
      const hint = table.sectionSlug?.trim();
      if (hint && !sectionSlugs.has(hint)) {
        throw new Error(`INVALID_TABLE_SECTION_SLUG:${table.slug}:${hint}`);
      }
    }
  }
}

export async function replaceGuideForCategory(categorySlug: string, payload: GuideUpsertInput) {
  const prisma = getPrismaOrThrow();
  const category = await requireCategory(categorySlug);
  assertTableSectionSlugsMatchTabs(payload);
  assertGuideSemanticKeysInPayload(payload);

  await prisma.guide.deleteMany({
    where: {
      categoryId: category.id,
    },
  });

  return prisma.guide.create({
    data: {
      title: payload.title,
      type: payload.type,
      category: {
        connect: { id: category.id },
      },
      tabs: {
        create: payload.tabs.map((tab, index) =>
          toGuideTabCreate({
            ...tab,
            position: index,
          }),
        ),
      },
    },
    include: guideDetailInclude,
  });
}

/**
 * Fusiona pestañas por `slug`: sustituye si ya existen o añade al final.
 * Reindexa `position` en orden. Útil para no reenviar toda la guía en un PUT.
 */
export async function mergeGuideTabsForCategory(categorySlug: string, incomingTabs: SeedGuideTab[]) {
  const prisma = getPrismaOrThrow();
  const record = await prisma.guide.findFirst({
    where: { category: { slug: categorySlug } },
    include: guideDetailInclude,
  });

  if (!record) {
    throw new Error(`CATEGORY_NOT_FOUND:${categorySlug}`);
  }

  if (incomingTabs.length === 0) {
    return record;
  }

  const base = guideRecordToUpsertInput(record);
  const merged = [...base.tabs];

  for (const patch of incomingTabs) {
    const i = merged.findIndex((t) => t.slug === patch.slug);
    if (i >= 0) {
      merged[i] = { ...patch, position: i };
    } else {
      merged.push(patch);
    }
  }

  merged.forEach((tab, index) => {
    tab.position = index;
  });

  return replaceGuideForCategory(categorySlug, {
    title: base.title,
    type: base.type,
    tabs: merged,
  });
}

export async function createSectionForGuide(categorySlug: string, payload: SectionMutationInput) {
  const prisma = getPrismaOrThrow();
  const tab = await requireGuideTab(categorySlug, payload.tabSlug ?? "");

  const existingSections = await prisma.guideSection.count({
    where: {
      tabId: tab.id,
    },
  });

  return prisma.guideSection.create({
    data: {
      tab: {
        connect: { id: tab.id },
      },
      slug: payload.slug,
      title: payload.title,
      subtitle: payload.subtitle,
      imageUrl: payload.imageUrl,
      imageAlt: payload.imageAlt,
      position: payload.position ?? existingSections,
      semanticKey: parseGuideSemanticKey(payload.semanticKey),
      paragraphs: {
        create: payload.paragraphs.map((content, index) => ({
          content,
          position: index,
        })),
      },
    },
    include: {
      paragraphs: {
        orderBy: { position: "asc" },
      },
      tab: true,
    },
  });
}

export async function updateSectionForGuide(
  categorySlug: string,
  sectionId: string,
  payload: SectionMutationInput,
) {
  const prisma = getPrismaOrThrow();
  const section = await prisma.guideSection.findFirst({
    where: {
      id: sectionId,
      tab: {
        guide: {
          category: {
            slug: categorySlug,
          },
        },
      },
    },
    include: {
      tab: true,
    },
  });

  if (!section) {
    return null;
  }

  const targetTab =
    payload.tabSlug && payload.tabSlug !== section.tab.slug
      ? await requireGuideTab(categorySlug, payload.tabSlug)
      : section.tab;

  await prisma.guideParagraph.deleteMany({
    where: {
      sectionId,
    },
  });

  return prisma.guideSection.update({
    where: { id: sectionId },
    data: {
      tab: {
        connect: { id: targetTab.id },
      },
      slug: payload.slug,
      title: payload.title,
      subtitle: payload.subtitle,
      imageUrl: payload.imageUrl,
      imageAlt: payload.imageAlt,
      position: payload.position ?? section.position,
      semanticKey: parseGuideSemanticKey(payload.semanticKey),
      paragraphs: {
        create: payload.paragraphs.map((content, index) => ({
          content,
          position: index,
        })),
      },
    },
    include: {
      paragraphs: {
        orderBy: { position: "asc" },
      },
      tab: true,
    },
  });
}

export async function deleteSectionForGuide(categorySlug: string, sectionId: string) {
  const prisma = getPrismaOrThrow();
  const section = await prisma.guideSection.findFirst({
    where: {
      id: sectionId,
      tab: {
        guide: {
          category: {
            slug: categorySlug,
          },
        },
      },
    },
    select: {
      id: true,
    },
  });

  if (!section) {
    return null;
  }

  await prisma.guideSection.delete({
    where: {
      id: sectionId,
    },
  });

  return { deleted: true };
}
