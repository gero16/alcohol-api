export type TableColumnKey =
  | "term"
  | "composition"
  | "objective"
  | "description"
  | "reference"
  | "abv";

export type TableColumn = {
  key: TableColumnKey;
  label: string;
};

export type SeedCategory = {
  slug: string;
  position: number;
  title: string;
  summary: string;
  abv: string;
  origin: string;
  imageUrl: string;
  imageAlt: string;
};

export type SeedGuideSection = {
  slug: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
  /** Vocabulario compartido: intro, origin, types, drinks, etc. */
  semanticKey?: string;
  paragraphs: string[];
};

export type SeedGuideTableRow = {
  term: string;
  composition?: string;
  objective?: string;
  description?: string;
  reference?: string;
  abv?: string;
  imageUrl?: string;
  imageAlt?: string;
};

export type SeedGuideTable = {
  slug: string;
  title: string;
  /** Slug de una sección de la misma pestaña; en guías partidas por sección (destilados) la tabla aparece ahí en lugar de en «Tablas y notas». */
  sectionSlug?: string;
  semanticKey?: string;
  columns: TableColumn[];
  rows: SeedGuideTableRow[];
};

export type SeedGuideTab = {
  slug: string;
  label: string;
  position: number;
  panelTitle?: string;
  noteTitle?: string;
  noteContent?: string;
  semanticKey?: string;
  sections?: SeedGuideSection[];
  tables?: SeedGuideTable[];
};

export type SeedGuide = {
  categorySlug: string;
  title: string;
  type: string;
  tabs: SeedGuideTab[];
};

export type SeedGlossaryItem = {
  slug: string;
  term: string;
  shortDefinition: string;
  details: string[];
  relatedCategories: string[];
  featured?: boolean;
};

export type SeedDataset = {
  categories: SeedCategory[];
  guides: SeedGuide[];
  glossary: SeedGlossaryItem[];
};

export type GuideUpsertInput = {
  title: string;
  type: string;
  tabs: SeedGuideTab[];
};

export type ApiCategory = SeedCategory & {
  id: string;
  hasGuide: boolean;
};

export type ApiGuideSection = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
  semanticKey?: string;
  paragraphs: string[];
};

export type ApiGuideTableRow = SeedGuideTableRow & {
  id: string;
};

export type ApiGuideTable = {
  id: string;
  slug: string;
  title: string;
  displayMode: "table" | "cards";
  sectionSlug?: string;
  semanticKey?: string;
  columns: TableColumn[];
  rows: ApiGuideTableRow[];
};

export type ApiGuideTab = {
  id: string;
  slug: string;
  label: string;
  panelTitle?: string;
  noteTitle?: string;
  noteContent?: string;
  semanticKey?: string;
  sections: ApiGuideSection[];
  tables: ApiGuideTable[];
};

export type ApiGuideDetail = {
  id: string;
  category: ApiCategory;
  title: string;
  type: string;
  tabs: ApiGuideTab[];
};

export type ApiGuideSummary = {
  id: string;
  categorySlug: string;
  categoryTitle: string;
  title: string;
  type: string;
  tabsCount: number;
};

export type ApiSubcategoryDetail = {
  id: string;
  slug: string;
  label: string;
  subtitle?: string;
  imageUrl?: string;
  imageAlt?: string;
  previewText: string;
  category: ApiCategory;
  guide: {
    id: string;
    title: string;
    type: string;
  };
  tab: ApiGuideTab;
};

export type ApiGlossaryItem = SeedGlossaryItem;
