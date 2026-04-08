import { listGuideDetailsFromDatabase } from "../content/backup";
import { prisma } from "../lib/prisma";

/**
 * Escribe por stdout (p. ej. `npm run guides:export-static > guides.json`).
 * No publica archivos en el front; el JSON público vía web es GET /admin/migration/guides/json con secreto.
 */
async function main() {
  const guides = await listGuideDetailsFromDatabase();
  const payload = {
    generatedAt: new Date().toISOString(),
    guides,
  };
  process.stdout.write(`${JSON.stringify(payload, null, 2)}\n`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma?.$disconnect();
  });
