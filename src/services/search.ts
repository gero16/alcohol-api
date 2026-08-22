import type { ApiGuideDetail, ApiGuideTab } from "../domain/contracts";
import {
  getGuideNavItems,
  isGuideNavSlug,
  toSpiritSubcategorySlug,
} from "../domain/guideNav";
import { getPrismaOrThrow } from "../lib/prisma";
import { listCategories, listGlossary, listGuideDetails } from "./content";

export type SearchResultKind = "category" | "guide" | "glossary" | "product";

export type SearchResult = {
  id: string;
  kind: SearchResultKind;
  title: string;
  snippet: string;
  href: string;
  breadcrumb: string;
};

export type SearchResponse = {
  query: string;
  results: SearchResult[];
};

const MAX_RESULTS = 40;
const SNIPPET_RADIUS = 70;

const TABLE_ROW_TEXT_KEYS = [
  "term",
  "composition",
  "objective",
  "description",
  "description2",
  "maridaje",
  "notes",
  "reference",
  "abv",
  "ageingMaturation",
  "distillationMethod",
  "profileCharacter",
  "body",
  "intensity",
  "bitternessIbu",
  "finish",
  "regionOrigin",
  "visualColor",
  "tannins",
  "acidity",
  "category",
  "examples",
] as const;

function normalizeForSearch(value: string): string {
  return value
    .toLocaleLowerCase("es")
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[-_/.,;:()+]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function queryTokens(query: string): string[] {
  const normalized = normalizeForSearch(query);
  if (!normalized) {
    return [];
  }
  return normalized.split(" ").filter((token) => token.length > 0);
}

function textMatches(haystack: string, tokens: string[]): boolean {
  if (tokens.length === 0) {
    return false;
  }
  const normalized = normalizeForSearch(haystack);
  return tokens.every((token) => normalized.includes(token));
}

function makeSnippet(haystack: string, tokens: string[]): string {
  const compact = haystack.replace(/\s+/g, " ").trim();
  if (!compact) {
    return "";
  }

  const normalizedHaystack = normalizeForSearch(compact);
  let bestIndex = -1;
  let bestToken = "";

  for (const token of tokens) {
    const index = normalizedHaystack.indexOf(token);
    if (index >= 0 && (bestIndex < 0 || index < bestIndex)) {
      bestIndex = index;
      bestToken = token;
    }
  }

  if (bestIndex < 0) {
    return compact.length > 160 ? `${compact.slice(0, 157)}…` : compact;
  }

  // Approximate original index using ratio (good enough for snippets).
  const ratio = compact.length / Math.max(normalizedHaystack.length, 1);
  const approx = Math.floor(bestIndex * ratio);
  const start = Math.max(0, approx - SNIPPET_RADIUS);
  const end = Math.min(compact.length, approx + bestToken.length + SNIPPET_RADIUS);
  const prefix = start > 0 ? "…" : "";
  const suffix = end < compact.length ? "…" : "";
  return `${prefix}${compact.slice(start, end).trim()}${suffix}`;
}

function pushUnique(results: SearchResult[], seen: Set<string>, item: SearchResult) {
  if (seen.has(item.id) || results.length >= MAX_RESULTS) {
    return;
  }
  seen.add(item.id);
  results.push(item);
}

function joinTexts(...parts: Array<string | null | undefined>): string {
  return parts
    .filter((part): part is string => typeof part === "string" && part.trim().length > 0)
    .join(" · ");
}

function buildGuideHref(
  guide: ApiGuideDetail,
  tabSlug: string,
  sectionSlug?: string,
  hash?: string,
): string {
  const categorySlug = guide.category.slug;
  const hashSuffix = hash ? `#${encodeURIComponent(hash)}` : "";

  if (sectionSlug && isGuideNavSlug(guide, sectionSlug)) {
    return `/${categorySlug}/${sectionSlug}${hashSuffix}`;
  }

  const tabAsNav =
    categorySlug === "destilados" ? toSpiritSubcategorySlug(tabSlug) : tabSlug;

  if (isGuideNavSlug(guide, tabAsNav)) {
    return `/${categorySlug}/${tabAsNav}${hashSuffix}`;
  }

  const params = new URLSearchParams({ tab: tabSlug });
  return `/${categorySlug}?${params.toString()}${hashSuffix}`;
}

function guideBreadcrumb(
  guide: ApiGuideDetail,
  tab: ApiGuideTab,
  ...extra: string[]
): string {
  const parts = [guide.category.title, tab.label, ...extra.filter(Boolean)];
  return parts.join(" › ");
}

function searchInGuide(
  guide: ApiGuideDetail,
  tokens: string[],
  results: SearchResult[],
  seen: Set<string>,
) {
  for (const tab of guide.tabs) {
    const tabBlob = joinTexts(tab.label, tab.panelTitle, tab.noteTitle, tab.noteContent);
    if (textMatches(tabBlob, tokens)) {
      pushUnique(results, seen, {
        id: `guide-tab:${guide.category.slug}:${tab.slug}`,
        kind: "guide",
        title: tab.label,
        snippet: makeSnippet(tabBlob, tokens),
        href: buildGuideHref(guide, tab.slug),
        breadcrumb: guideBreadcrumb(guide, tab),
      });
    }

    for (const classification of tab.classifications ?? []) {
      const blockTexts = (classification.blocks ?? [])
        .map((block) => {
          if (block.kind === "image") {
            return block.alt;
          }
          return block.text;
        })
        .join(" ");
      const blob = joinTexts(classification.slug, blockTexts);
      if (textMatches(blob, tokens)) {
        pushUnique(results, seen, {
          id: `guide-class:${guide.category.slug}:${tab.slug}:${classification.slug}`,
          kind: "guide",
          title: classification.slug,
          snippet: makeSnippet(blob, tokens),
          href: buildGuideHref(guide, tab.slug),
          breadcrumb: guideBreadcrumb(guide, tab, "Clasificaciones"),
        });
      }
    }

    for (const section of tab.sections) {
      const blob = joinTexts(
        section.title,
        section.subtitle,
        ...(section.paragraphs ?? []),
      );
      if (textMatches(blob, tokens)) {
        pushUnique(results, seen, {
          id: `guide-section:${guide.category.slug}:${tab.slug}:${section.slug}`,
          kind: "guide",
          title: section.title,
          snippet: makeSnippet(blob, tokens),
          href: buildGuideHref(guide, tab.slug, section.slug, `section-${section.slug}`),
          breadcrumb: guideBreadcrumb(guide, tab, section.title),
        });
      }
    }

    for (const table of tab.tables) {
      const tableTitleBlob = joinTexts(table.title, table.slug);
      if (textMatches(tableTitleBlob, tokens)) {
        pushUnique(results, seen, {
          id: `guide-table:${guide.category.slug}:${tab.slug}:${table.slug}`,
          kind: "guide",
          title: table.title,
          snippet: makeSnippet(tableTitleBlob, tokens),
          href: buildGuideHref(
            guide,
            tab.slug,
            table.sectionSlug ?? undefined,
            `table-${table.slug}`,
          ),
          breadcrumb: guideBreadcrumb(guide, tab, table.title),
        });
      }

      for (const row of table.rows) {
        const fields = TABLE_ROW_TEXT_KEYS.map((key) => {
          const value = row[key as keyof typeof row];
          return typeof value === "string" ? value : "";
        });
        const blob = joinTexts(...fields);
        if (!textMatches(blob, tokens)) {
          continue;
        }

        pushUnique(results, seen, {
          id: `guide-row:${guide.category.slug}:${tab.slug}:${table.slug}:${row.id}`,
          kind: "guide",
          title: row.term || table.title,
          snippet: makeSnippet(blob, tokens),
          href: buildGuideHref(
            guide,
            tab.slug,
            table.sectionSlug ?? undefined,
            `table-${table.slug}`,
          ),
          breadcrumb: guideBreadcrumb(guide, tab, table.title),
        });
      }
    }
  }

  // Prefer subcategory landing when the whole guide title matches.
  if (textMatches(joinTexts(guide.title, guide.type), tokens)) {
    const nav = getGuideNavItems(guide);
    pushUnique(results, seen, {
      id: `guide:${guide.category.slug}`,
      kind: "guide",
      title: guide.title,
      snippet: makeSnippet(guide.title, tokens),
      href: nav[0] ? `/${guide.category.slug}/${nav[0].slug}` : `/${guide.category.slug}`,
      breadcrumb: guide.category.title,
    });
  }
}

function jsonStrings(value: unknown): string[] {
  if (typeof value === "string") {
    return [value];
  }
  if (Array.isArray(value)) {
    return value.flatMap((item) => jsonStrings(item));
  }
  if (value && typeof value === "object") {
    return Object.values(value).flatMap((item) => jsonStrings(item));
  }
  return [];
}

export async function searchContent(rawQuery: string): Promise<SearchResponse> {
  const query = rawQuery.trim();
  const tokens = queryTokens(query);

  if (tokens.length === 0) {
    return { query, results: [] };
  }

  const [categories, guides, glossary] = await Promise.all([
    listCategories(),
    listGuideDetails(),
    listGlossary(),
  ]);

  let products: Array<{
    id: string;
    slug: string;
    name: string;
    brand: string;
    categorySlug: string;
    subcategorySlug: string | null;
    shortDescription: string | null;
    longDescription: string | null;
    origin: string | null;
    regionDetail: string | null;
    servingSuggestion: string | null;
    tags: unknown;
    tastingNose: unknown;
    tastingPalate: unknown;
    tastingFinish: string | null;
    beerStyle: string | null;
    varietal: string | null;
    distillery: string | null;
    producer: string | null;
  }> = [];

  try {
    products = await getPrismaOrThrow().product.findMany({
      select: {
        id: true,
        slug: true,
        name: true,
        brand: true,
        categorySlug: true,
        subcategorySlug: true,
        shortDescription: true,
        longDescription: true,
        origin: true,
        regionDetail: true,
        servingSuggestion: true,
        tags: true,
        tastingNose: true,
        tastingPalate: true,
        tastingFinish: true,
        beerStyle: true,
        varietal: true,
        distillery: true,
        producer: true,
      },
    });
  } catch {
    products = [];
  }

  const results: SearchResult[] = [];
  const seen = new Set<string>();

  for (const category of categories) {
    const blob = joinTexts(category.title, category.summary, category.origin, category.abv);
    if (!textMatches(blob, tokens)) {
      continue;
    }
    pushUnique(results, seen, {
      id: `category:${category.slug}`,
      kind: "category",
      title: category.title,
      snippet: makeSnippet(blob, tokens),
      href: `/${category.slug}`,
      breadcrumb: "Categoría",
    });
  }

  for (const guide of guides) {
    if (results.length >= MAX_RESULTS) {
      break;
    }
    searchInGuide(guide, tokens, results, seen);
  }

  for (const item of glossary) {
    if (results.length >= MAX_RESULTS) {
      break;
    }
    const blob = joinTexts(item.term, item.shortDefinition, ...(item.details ?? []));
    if (!textMatches(blob, tokens)) {
      continue;
    }
    pushUnique(results, seen, {
      id: `glossary:${item.slug}`,
      kind: "glossary",
      title: item.term,
      snippet: makeSnippet(blob, tokens),
      href: `/glosario#${encodeURIComponent(item.slug)}`,
      breadcrumb: "Glosario",
    });
  }

  for (const product of products) {
    if (results.length >= MAX_RESULTS) {
      break;
    }
    const blob = joinTexts(
      product.name,
      product.brand,
      product.shortDescription,
      product.longDescription,
      product.origin,
      product.regionDetail,
      product.servingSuggestion,
      product.beerStyle,
      product.varietal,
      product.distillery,
      product.producer,
      product.tastingFinish,
      ...jsonStrings(product.tags),
      ...jsonStrings(product.tastingNose),
      ...jsonStrings(product.tastingPalate),
    );
    if (!textMatches(blob, tokens)) {
      continue;
    }

    const href = product.subcategorySlug
      ? `/${product.categorySlug}/${product.subcategorySlug}`
      : `/${product.categorySlug}`;

    pushUnique(results, seen, {
      id: `product:${product.slug}`,
      kind: "product",
      title: product.name,
      snippet: makeSnippet(blob, tokens),
      href,
      breadcrumb: joinTexts("Producto", product.brand, product.categorySlug),
    });
  }

  return { query, results: results.slice(0, MAX_RESULTS) };
}
