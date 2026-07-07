import { applyGuideMetadataSchemaPatches } from "../services/schemaMigrations";

async function main() {
  const result = await applyGuideMetadataSchemaPatches();
  console.log("Schema patches applied:", result.executed);
  console.log("Nav backfill:", result.navBackfill);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
