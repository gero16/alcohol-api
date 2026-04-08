import path from "node:path";

function resolveGuidesStaticJsonPath(): string {
  const raw = process.env.GUIDES_STATIC_JSON_PATH?.trim();
  if (raw) {
    return path.isAbsolute(raw) ? raw : path.resolve(process.cwd(), raw);
  }
  return path.resolve(process.cwd(), "static", "guides.json");
}

function parsePort(value: string | undefined, fallback: number): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function parsePositiveInt(value: string | undefined, fallback: number): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? Math.floor(parsed) : fallback;
}

export const config = {
  host: process.env.HOST ?? "0.0.0.0",
  port: parsePort(process.env.PORT, 3001),
  nodeEnv: process.env.NODE_ENV ?? "development",
  fullBackupCacheTtlMs: parsePositiveInt(process.env.FULL_BACKUP_CACHE_TTL_MS, 5 * 60 * 1000),
  /** Destino de POST /admin/migration/guides/publish-static (servido por el API en GET /static/guides.json). */
  guidesStaticJsonPath: resolveGuidesStaticJsonPath(),
};
