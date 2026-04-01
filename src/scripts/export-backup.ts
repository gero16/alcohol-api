import { exportBackupDataset, getBackupFilePath } from "../content/backup";

async function main() {
  await exportBackupDataset();
  console.log(`Respaldo JSON generado en ${getBackupFilePath()}.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
