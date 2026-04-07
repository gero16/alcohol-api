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
};
