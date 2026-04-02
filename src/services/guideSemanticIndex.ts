import type {
  ApiGuideDetail,
  ApiSemanticGuideBlock,
  ApiSemanticGuideIndex,
} from "../domain/contracts";

export type BuildSemanticIndexOptions = {
  /** Solo una pestaña (p. ej. `whisky-guia` dentro de destilados). */
  tabSlug?: string;
  /** Solo una clave semántica. */
  semanticKey?: string;
};

function pushBlock(buckets: Record<string, ApiSemanticGuideBlock[]>, key: string, block: ApiSemanticGuideBlock) {
  if (!buckets[key]) {
    buckets[key] = [];
  }
  buckets[key].push(block);
}

/**
 * Agrupa bloques por `semanticKey` asignado en admin (pestaña, sección o tabla).
 * - Vino: suele bastar con fijar la clave en cada **pestaña** (composición, elaboración, crianza).
 * - Whisky: suele fijarse en **secciones** o **tablas** dentro de `whisky-guia`, o usar `?tabSlug=whisky-guia`.
 */
export function buildSemanticGuideIndex(
  guide: ApiGuideDetail,
  options: BuildSemanticIndexOptions = {},
): ApiSemanticGuideIndex {
  const buckets: Record<string, ApiSemanticGuideBlock[]> = {};
  const tabSlugFilter = options.tabSlug?.trim();

  const tabs = tabSlugFilter
    ? guide.tabs.filter((t) => t.slug === tabSlugFilter)
    : guide.tabs;

  for (const tab of tabs) {
    const tabSlug = tab.slug;
    const tabLabel = tab.label;

    const tabKey = tab.semanticKey?.trim();
    if (tabKey) {
      pushBlock(buckets, tabKey, {
        kind: "tab",
        semanticKey: tabKey,
        tabSlug,
        tabLabel,
        panelTitle: tab.panelTitle,
        noteTitle: tab.noteTitle,
        noteContent: tab.noteContent,
        sections: tab.sections,
        tables: tab.tables,
      });
    }

    for (const section of tab.sections) {
      const sk = section.semanticKey?.trim();
      if (!sk) {
        continue;
      }
      const tablesForSection = tab.tables.filter(
        (tbl) => tbl.sectionSlug?.trim() === section.slug,
      );
      pushBlock(buckets, sk, {
        kind: "section",
        semanticKey: sk,
        tabSlug,
        tabLabel,
        section,
        tables: tablesForSection,
      });
    }

    for (const table of tab.tables) {
      const tk = table.semanticKey?.trim();
      if (!tk) {
        continue;
      }
      pushBlock(buckets, tk, {
        kind: "table",
        semanticKey: tk,
        tabSlug,
        tabLabel,
        table,
      });
    }
  }

  const filterKey = options.semanticKey?.trim();
  if (filterKey) {
    const single = buckets[filterKey];
    return {
      categorySlug: guide.category.slug,
      guideTitle: guide.title,
      buckets: single ? { [filterKey]: single } : {},
    };
  }

  return {
    categorySlug: guide.category.slug,
    guideTitle: guide.title,
    buckets,
  };
}
