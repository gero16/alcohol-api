import { buildSeedDatasetFromDatabase } from "../content/backup";

/**
 * Escribe un snapshot JSON por stdout (p. ej. `npm run backup:export > dump.json`).
 * No crea archivos dentro del repositorio.
 */
async function main() {
  const snapshot = await buildSeedDatasetFromDatabase();
  process.stdout.write(`${JSON.stringify(snapshot, null, 2)}\n`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
