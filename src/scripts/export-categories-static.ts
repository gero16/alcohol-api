import fs from "node:fs/promises";
import path from "node:path";
import { listCategoriesFromDatabase } from "../content/backup";
import { config } from "../config";
import { prisma } from "../lib/prisma";

/**
 * Escribe static/categories.json (mismo JSON que POST …/categories/publish-static devuelve en el cuerpo).
 * Ejecutar desde `alcohol-api`: `npm run categories:export-static`
 */
async function main() {
  const categories = await listCategoriesFromDatabase();
  const generatedAt = new Date().toISOString();
  const payload = { generatedAt, categories };
  const outFile = config.categoriesStaticJsonPath;

  await fs.mkdir(path.dirname(outFile), { recursive: true });
  await fs.writeFile(outFile, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  console.log(`Escrito ${outFile} (${categories.length} categorías).`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma?.$disconnect();
  });
