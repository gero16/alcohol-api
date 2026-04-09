import fs from "node:fs/promises";
import path from "node:path";
import { listGuideDetailsFromDatabase } from "../content/backup";
import { config } from "../config";
import { prisma } from "../lib/prisma";

/**
 * Escribe static/guides.json (mismo JSON que POST /admin/migration/guides/publish-static devuelve en el cuerpo).
 * Ejecutar desde `alcohol-api`: `npm run guides:export-static`
 */
async function main() {
  const guides = await listGuideDetailsFromDatabase();
  const generatedAt = new Date().toISOString();
  const payload = { generatedAt, guides };
  const outFile = config.guidesStaticJsonPath;

  await fs.mkdir(path.dirname(outFile), { recursive: true });
  await fs.writeFile(outFile, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  console.log(`Escrito ${outFile} (${guides.length} guías).`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma?.$disconnect();
  });
