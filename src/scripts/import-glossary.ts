import alcoholData from "../content/alcohol-data.json";
import type { SeedDataset } from "../domain/contracts";
import { exportBackupDataset } from "../content/backup";
import { replaceGlossaryItems } from "../services/glossary";

const dataset = alcoholData as SeedDataset;

async function main() {
  await replaceGlossaryItems(dataset.glossary);
  await exportBackupDataset();
  console.log("Glosario importado desde alcohol-data.json y respaldo actualizado.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
