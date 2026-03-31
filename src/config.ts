function parsePort(value: string | undefined, fallback: number): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

export const config = {
  host: process.env.HOST ?? "0.0.0.0",
  port: parsePort(process.env.PORT, 3001),
  nodeEnv: process.env.NODE_ENV ?? "development",
};
