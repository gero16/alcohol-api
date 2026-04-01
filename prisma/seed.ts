import alcoholData from "../src/content/alcohol-data.json";
import { exportBackupDataset } from "../src/content/backup";
import type { SeedDataset } from "../src/domain/contracts";
import { getPrismaOrThrow } from "../src/lib/prisma";
import { replaceGlossaryItems } from "../src/services/glossary";
import { replaceGuideForCategory } from "../src/services/guides";

const dataset = alcoholData as SeedDataset;
const prisma = getPrismaOrThrow();

async function main() {
  await prisma.glossaryItem.deleteMany();
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

  await replaceGlossaryItems(dataset.glossary);

  await exportBackupDataset();
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
