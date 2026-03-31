import alcoholData from "../src/content/alcohol-data.json";
import type { SeedDataset } from "../src/domain/contracts";
import { prisma } from "../src/lib/prisma";
import { replaceGuideForCategory } from "../src/services/guides";

const dataset = alcoholData as SeedDataset;

async function main() {
  await prisma.guide.deleteMany();
  await prisma.category.deleteMany();

  for (const category of dataset.categories) {
    await prisma.category.create({
      data: category,
    });
  }

  for (const guide of dataset.guides) {
    await replaceGuideForCategory(guide.categorySlug, guide);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("Base de datos inicializada desde alcohol-data.json.");
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
