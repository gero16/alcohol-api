/**
 * Claves estables para alinear contenido entre categorías (vino, destilados, licores, etc.).
 * No sustituyen título ni slug editorial; sirven para API, admin y selectores (data-attributes).
 */
export const GUIDE_SEMANTIC_KEYS = [
  "intro",
  "history",
  "origin",
  "making",
  "classifications",
  "types",
  "sensory",
  "serving",
  "drinks",
  "pairing",
  "regulation",
  "culture",
] as const;

export type GuideSemanticKey = (typeof GUIDE_SEMANTIC_KEYS)[number];

export const GUIDE_SEMANTIC_LABELS_ES: Record<GuideSemanticKey, string> = {
  intro: "Introducción / qué es",
  history: "Historia",
  origin: "Origen, denominación o geografía",
  making: "Elaboración o proceso (creación)",
  classifications: "Marco de clasificación",
  types: "Tipos o estilos",
  sensory: "Cata, aromas o perfil sensorial",
  serving: "Cómo tomar o servir",
  drinks: "Cócteles y tragos",
  pairing: "Maridaje o combinaciones",
  regulation: "Normativa, etiqueta o graduación",
  culture: "Cultura, costumbres o mercado",
};

const KEY_SET = new Set<string>(GUIDE_SEMANTIC_KEYS);

/** Devuelve la clave si es válida; si no, null (contenido legado sin asignar). */
export function parseGuideSemanticKey(raw: string | undefined | null): GuideSemanticKey | null {
  if (raw == null || typeof raw !== "string") {
    return null;
  }
  const t = raw.trim();
  if (!t.length) {
    return null;
  }
  return KEY_SET.has(t) ? (t as GuideSemanticKey) : null;
}

export function assertGuideSemanticKeysInPayload(payload: {
  tabs: Array<{
    semanticKey?: string | null;
    sections?: Array<{ semanticKey?: string | null }>;
    tables?: Array<{ semanticKey?: string | null }>;
  }>;
}) {
  const check = (value: string | undefined | null, path: string) => {
    if (value == null || value === "") {
      return;
    }
    if (!parseGuideSemanticKey(value)) {
      throw new Error(`INVALID_GUIDE_SEMANTIC_KEY:${path}:${value}`);
    }
  };

  for (const [tabIndex, tab] of payload.tabs.entries()) {
    check(tab.semanticKey, `tabs[${tabIndex}]`);
    for (const [sectionIndex, section] of (tab.sections ?? []).entries()) {
      check(section.semanticKey, `tabs[${tabIndex}].sections[${sectionIndex}]`);
    }
    for (const [tableIndex, table] of (tab.tables ?? []).entries()) {
      check(table.semanticKey, `tabs[${tabIndex}].tables[${tableIndex}]`);
    }
  }
}
