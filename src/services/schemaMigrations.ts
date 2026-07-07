import { getPrismaOrThrow } from "../lib/prisma";
import {
  effectiveSectionShowInNav,
  effectiveTabShowInNav,
} from "../domain/guideNav";

/**
 * DDL idempotente (PostgreSQL 11+). Alineado con prisma/schema.prisma y manual-postgres-guide-columns.sql.
 */
const GUIDE_METADATA_PATCHES = [
  `ALTER TABLE "GuideTab" ADD COLUMN IF NOT EXISTS "semanticKey" TEXT`,
  `ALTER TABLE "GuideSection" ADD COLUMN IF NOT EXISTS "semanticKey" TEXT`,
  `ALTER TABLE "GuideTable" ADD COLUMN IF NOT EXISTS "sectionSlug" TEXT`,
  `ALTER TABLE "GuideTable" ADD COLUMN IF NOT EXISTS "semanticKey" TEXT`,
  `ALTER TABLE "GuideTab" ADD COLUMN IF NOT EXISTS "showInNav" BOOLEAN`,
  `ALTER TABLE "GuideSection" ADD COLUMN IF NOT EXISTS "showInNav" BOOLEAN`,
] as const;

export type SchemaPatchResult = {
  statements: readonly string[];
  executed: number;
  navBackfill?: {
    tabsUpdated: number;
    sectionsUpdated: number;
  };
};

export async function backfillGuideNavFlags(): Promise<{ tabsUpdated: number; sectionsUpdated: number }> {
  const prisma = getPrismaOrThrow();
  const guides = await prisma.guide.findMany({
    include: {
      category: true,
      tabs: {
        include: {
          sections: true,
        },
      },
    },
  });

  let tabsUpdated = 0;
  let sectionsUpdated = 0;

  for (const guide of guides) {
    const categorySlug = guide.category.slug;

    for (const tab of guide.tabs) {
      if (tab.showInNav === null && effectiveTabShowInNav(categorySlug, tab)) {
        await prisma.guideTab.update({
          where: { id: tab.id },
          data: { showInNav: true },
        });
        tabsUpdated += 1;
      }

      for (const section of tab.sections) {
        if (section.showInNav === null && effectiveSectionShowInNav(categorySlug, tab, section)) {
          await prisma.guideSection.update({
            where: { id: section.id },
            data: { showInNav: true },
          });
          sectionsUpdated += 1;
        }
      }
    }
  }

  return { tabsUpdated, sectionsUpdated };
}

export async function applyGuideMetadataSchemaPatches(): Promise<SchemaPatchResult> {
  const prisma = getPrismaOrThrow();
  let executed = 0;

  for (const sql of GUIDE_METADATA_PATCHES) {
    await prisma.$executeRawUnsafe(sql);
    executed += 1;
  }

  const navBackfill = await backfillGuideNavFlags();

  return { statements: GUIDE_METADATA_PATCHES, executed, navBackfill };
}
