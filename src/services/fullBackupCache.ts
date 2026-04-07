import type { SeedDataset } from "../domain/contracts";
import { buildSeedDatasetFromDatabase } from "../content/backup";
import { config } from "../config";

type CacheState = {
  data: SeedDataset | null;
  updatedAt: number;
  refreshInFlight: Promise<SeedDataset> | null;
};

const cacheState: CacheState = {
  data: null,
  updatedAt: 0,
  refreshInFlight: null,
};

function isCacheFresh(now: number, maxAgeMs: number): boolean {
  if (!cacheState.data) {
    return false;
  }

  return now - cacheState.updatedAt < maxAgeMs;
}

async function refreshCacheFromDatabase(): Promise<SeedDataset> {
  if (!cacheState.refreshInFlight) {
    cacheState.refreshInFlight = (async () => {
      const dataset = await buildSeedDatasetFromDatabase();
      cacheState.data = dataset;
      cacheState.updatedAt = Date.now();
      return dataset;
    })().finally(() => {
      cacheState.refreshInFlight = null;
    });
  }

  return cacheState.refreshInFlight;
}

type FullBackupResult = {
  dataset: SeedDataset;
  fromCache: boolean;
  cachedAt: string;
  ageMs: number;
  ttlMs: number;
};

export async function getFullBackupDataset(options?: {
  forceRefresh?: boolean;
  ttlMs?: number;
}): Promise<FullBackupResult> {
  const ttlMs = options?.ttlMs ?? config.fullBackupCacheTtlMs;
  const forceRefresh = options?.forceRefresh ?? false;
  const now = Date.now();
  const fresh = isCacheFresh(now, ttlMs);

  if (!forceRefresh && fresh && cacheState.data) {
    return {
      dataset: cacheState.data,
      fromCache: true,
      cachedAt: new Date(cacheState.updatedAt).toISOString(),
      ageMs: now - cacheState.updatedAt,
      ttlMs,
    };
  }

  const dataset = await refreshCacheFromDatabase();
  const ageMs = Math.max(0, Date.now() - cacheState.updatedAt);

  return {
    dataset,
    fromCache: false,
    cachedAt: new Date(cacheState.updatedAt).toISOString(),
    ageMs,
    ttlMs,
  };
}
