import { spawnSync } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import EmbeddedPostgres from "embedded-postgres";

async function runCommand(command: string, args: string[], env: NodeJS.ProcessEnv) {
  const result = spawnSync(command, args, {
    cwd: process.cwd(),
    env,
    stdio: "inherit",
    shell: true,
  });

  if (result.status !== 0) {
    throw new Error(`Command failed: ${command} ${args.join(" ")}`);
  }
}

async function main() {
  const dataDir = mkdtempSync(join(tmpdir(), "alcohol-pg-"));
  const port = 55000 + Math.floor(Math.random() * 400);
  const database = "alcohol_postgre";
  const user = "postgres";
  const password = "holanda";

  const embedded = new EmbeddedPostgres({
    databaseDir: dataDir,
    user,
    password,
    port,
    persistent: false,
  });

  console.log("Iniciando PostgreSQL embebido...");
  await embedded.initialise();
  await embedded.start();
  await embedded.createDatabase(database);

  const databaseUrl = `postgresql://${user}:${password}@127.0.0.1:${port}/${database}?schema=public`;
  const env = {
    ...process.env,
    DATABASE_URL: databaseUrl,
  };

  try {
    console.log("Aplicando esquema Prisma...");
    await runCommand("npx", ["prisma", "db", "push", "--accept-data-loss"], env);

    console.log("Importando guías desde static/guides.json...");
    await runCommand("npx", ["tsx", "src/scripts/import-guides-from-static.ts"], env);

    console.log("Ejecutando backfill de navegación...");
    await runCommand("npx", ["tsx", "src/scripts/backfill-guide-nav.ts"], env);

    console.log("Backfill completado en PostgreSQL local embebido.");
  } finally {
    console.log("Deteniendo PostgreSQL embebido...");
    await embedded.stop();
    rmSync(dataDir, { recursive: true, force: true });
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
