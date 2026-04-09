import fs from "node:fs/promises";
import path from "node:path";
import { listGlossaryFromDatabase } from "../content/backup";
import { config } from "../config";
import { prisma } from "../lib/prisma";

/**
 * Escribe static/glossary.json (mismo JSON que POST …/glossary/publish-static devuelve en el cuerpo).
 * Ejecutar desde `alcohol-api`: `npm run glossary:export-static`
 */
async function main() {
  const glossary = await listGlossaryFromDatabase();
  const generatedAt = new Date().toISOString();
  const payload = { generatedAt, glossary };
  const outFile = config.glossaryStaticJsonPath;

  await fs.mkdir(path.dirname(outFile), { recursive: true });
  await fs.writeFile(outFile, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  console.log(`Escrito ${outFile} (${glossary.length} entradas).`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma?.$disconnect();
  });
