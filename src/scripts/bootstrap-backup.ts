import alcoholData from "../content/alcohol-data.json";
import { getBackupFilePath, writeBackupDataset } from "../content/backup";
import type { SeedDataset } from "../domain/contracts";

const dataset = alcoholData as SeedDataset;

async function main() {
  await writeBackupDataset(dataset);
  console.log(`Respaldo inicial creado en ${getBackupFilePath()}.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
