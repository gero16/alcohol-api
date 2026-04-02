import { getPrismaOrThrow } from "../lib/prisma";

/**
 * DDL idempotente (PostgreSQL 11+). Alineado con prisma/schema.prisma y manual-postgres-guide-columns.sql.
 */
const GUIDE_METADATA_PATCHES = [
  `ALTER TABLE "GuideTab" ADD COLUMN IF NOT EXISTS "semanticKey" TEXT`,
  `ALTER TABLE "GuideSection" ADD COLUMN IF NOT EXISTS "semanticKey" TEXT`,
  `ALTER TABLE "GuideTable" ADD COLUMN IF NOT EXISTS "sectionSlug" TEXT`,
  `ALTER TABLE "GuideTable" ADD COLUMN IF NOT EXISTS "semanticKey" TEXT`,
] as const;

export type SchemaPatchResult = {
  statements: readonly string[];
  executed: number;
};

export async function applyGuideMetadataSchemaPatches(): Promise<SchemaPatchResult> {
  const prisma = getPrismaOrThrow();
  let executed = 0;

  for (const sql of GUIDE_METADATA_PATCHES) {
    await prisma.$executeRawUnsafe(sql);
    executed += 1;
  }

  return { statements: GUIDE_METADATA_PATCHES, executed };
}
