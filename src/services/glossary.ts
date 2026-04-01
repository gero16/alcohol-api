import type { SeedGlossaryItem } from "../domain/contracts";
import { glossaryItemInclude, toApiGlossaryItem } from "../domain/serializers";
import { getPrismaOrThrow } from "../lib/prisma";

async function buildCategoryLinks(relatedCategorySlugs: string[]) {
  const prisma = getPrismaOrThrow();
  const categories = await prisma.category.findMany({
    select: {
      id: true,
      slug: true,
    },
  });
  const categoryBySlug = new Map(categories.map((category) => [category.slug, category.id]));
  let linkedCategoriesCount = 0;
  let skippedCategoryLinksCount = 0;

  const links = relatedCategorySlugs.flatMap((categorySlug, index) => {
    const categoryId = categoryBySlug.get(categorySlug);

    if (!categoryId) {
      skippedCategoryLinksCount += 1;
      return [];
    }

    linkedCategoriesCount += 1;

    return [
      {
        category: {
          connect: { id: categoryId },
        },
        position: index,
      },
    ];
  });

  return {
    links,
    linkedCategoriesCount,
    skippedCategoryLinksCount,
  };
}

export async function replaceGlossaryItems(items: SeedGlossaryItem[]) {
  const prisma = getPrismaOrThrow();

  await prisma.glossaryItem.deleteMany();

  let linkedCategoriesCount = 0;
  let skippedCategoryLinksCount = 0;

  for (const item of items) {
    const categoryLinks = await buildCategoryLinks(item.relatedCategories);
    linkedCategoriesCount += categoryLinks.linkedCategoriesCount;
    skippedCategoryLinksCount += categoryLinks.skippedCategoryLinksCount;

    await prisma.glossaryItem.create({
      data: {
        slug: item.slug,
        term: item.term,
        shortDefinition: item.shortDefinition,
        featured: item.featured ?? false,
        details: {
          create: item.details.map((content, index) => ({
            content,
            position: index,
          })),
        },
        relatedCategories: {
          create: categoryLinks.links,
        },
      },
    });
  }

  return {
    importedItemsCount: items.length,
    linkedCategoriesCount,
    skippedCategoryLinksCount,
  };
}

export async function createGlossaryItem(payload: SeedGlossaryItem) {
  const prisma = getPrismaOrThrow();
  const categoryLinks = await buildCategoryLinks(payload.relatedCategories);

  const item = await prisma.glossaryItem.create({
    data: {
      slug: payload.slug,
      term: payload.term,
      shortDefinition: payload.shortDefinition,
      featured: payload.featured ?? false,
      details: {
        create: payload.details.map((content, index) => ({
          content,
          position: index,
        })),
      },
      relatedCategories: {
        create: categoryLinks.links,
      },
    },
    include: glossaryItemInclude,
  });

  return {
    item: toApiGlossaryItem(item),
    linkedCategoriesCount: categoryLinks.linkedCategoriesCount,
    skippedCategoryLinksCount: categoryLinks.skippedCategoryLinksCount,
  };
}

export async function updateGlossaryItem(currentSlug: string, payload: SeedGlossaryItem) {
  const prisma = getPrismaOrThrow();
  const existing = await prisma.glossaryItem.findUnique({
    where: { slug: currentSlug },
    select: { id: true },
  });

  if (!existing) {
    return null;
  }

  const categoryLinks = await buildCategoryLinks(payload.relatedCategories);

  await prisma.glossaryDetail.deleteMany({
    where: {
      glossaryItemId: existing.id,
    },
  });

  await prisma.glossaryItemCategory.deleteMany({
    where: {
      glossaryItemId: existing.id,
    },
  });

  const item = await prisma.glossaryItem.update({
    where: { id: existing.id },
    data: {
      slug: payload.slug,
      term: payload.term,
      shortDefinition: payload.shortDefinition,
      featured: payload.featured ?? false,
      details: {
        create: payload.details.map((content, index) => ({
          content,
          position: index,
        })),
      },
      relatedCategories: {
        create: categoryLinks.links,
      },
    },
    include: glossaryItemInclude,
  });

  return {
    item: toApiGlossaryItem(item),
    linkedCategoriesCount: categoryLinks.linkedCategoriesCount,
    skippedCategoryLinksCount: categoryLinks.skippedCategoryLinksCount,
  };
}

export async function deleteGlossaryItem(slug: string) {
  const prisma = getPrismaOrThrow();
  const existing = await prisma.glossaryItem.findUnique({
    where: { slug },
    select: { id: true },
  });

  if (!existing) {
    return null;
  }

  await prisma.glossaryItem.delete({
    where: { id: existing.id },
  });

  return { deleted: true };
}
