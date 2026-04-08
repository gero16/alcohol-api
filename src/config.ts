import path from "node:path";

function resolveStaticJsonPath(envValue: string | undefined, defaultFileName: string): string {
  const raw = envValue?.trim();
  if (raw) {
    return path.isAbsolute(raw) ? raw : path.resolve(process.cwd(), raw);
  }
  return path.resolve(process.cwd(), "static", defaultFileName);
}

function parsePort(value: string | undefined, fallback: number): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

export const config = {
  host: process.env.HOST ?? "0.0.0.0",
  port: parsePort(process.env.PORT, 3001),
  nodeEnv: process.env.NODE_ENV ?? "development",
  /** POST …/guides/publish-static → GET /static/guides.json */
  guidesStaticJsonPath: resolveStaticJsonPath(process.env.GUIDES_STATIC_JSON_PATH, "guides.json"),
  /** POST …/glossary/publish-static → GET /static/glossary.json */
  glossaryStaticJsonPath: resolveStaticJsonPath(process.env.GLOSSARY_STATIC_JSON_PATH, "glossary.json"),
  /** POST …/categories/publish-static → GET /static/categories.json */
  categoriesStaticJsonPath: resolveStaticJsonPath(process.env.CATEGORIES_STATIC_JSON_PATH, "categories.json"),
};
