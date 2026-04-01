import type { SeedGlossaryItem } from "../domain/contracts";
import { getPrismaOrThrow } from "../lib/prisma";

export async function replaceGlossaryItems(items: SeedGlossaryItem[]) {
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

  await prisma.glossaryItem.deleteMany();

  for (const item of items) {
    const relatedCategories = item.relatedCategories.flatMap((categorySlug, index) => {
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
          create: relatedCategories,
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
