import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { ApiGuideDetail, GuideUpsertInput, SeedGuideTab } from "../domain/contracts";
import { getPrismaOrThrow } from "../lib/prisma";
import { replaceGuideForCategory } from "../services/guides";

type GuidesStaticFile = {
  guides: ApiGuideDetail[];
};

function guideDetailToUpsertInput(guide: ApiGuideDetail): GuideUpsertInput {
  return {
    title: guide.title,
    type: guide.type,
    tabs: guide.tabs.map((tab, index): SeedGuideTab => ({
      slug: tab.slug,
      label: tab.label,
      position: index,
      panelTitle: tab.panelTitle,
      noteTitle: tab.noteTitle,
      noteContent: tab.noteContent,
      semanticKey: tab.semanticKey,
      showInNav: tab.showInNav,
      classifications: (tab.classifications ?? []).map((c) => ({
        slug: c.slug,
        blocks: c.blocks ?? [],
        semanticKey: c.semanticKey,
      })),
      sections: tab.sections.map((section) => ({
        slug: section.slug,
        title: section.title,
        subtitle: section.subtitle,
        imageUrl: section.imageUrl,
        imageAlt: section.imageAlt,
        semanticKey: section.semanticKey,
        showInNav: section.showInNav,
        paragraphs: [...section.paragraphs],
      })),
      tables: tab.tables.map((table) => ({
        slug: table.slug,
        title: table.title,
        sectionSlug: table.sectionSlug,
        semanticKey: table.semanticKey,
        columns: table.columns,
        rows: table.rows.map((row) => ({
          term: row.term,
          composition: row.composition,
          objective: row.objective,
          description: row.description,
          description2: row.description2,
          maridaje: row.maridaje,
          notes: row.notes,
          reference: row.reference,
          abv: row.abv,
          ageingMaturation: row.ageingMaturation,
          distillationMethod: row.distillationMethod,
          profileCharacter: row.profileCharacter,
          body: row.body,
          intensity: row.intensity,
          bitternessIbu: row.bitternessIbu,
          finish: row.finish,
          regionOrigin: row.regionOrigin,
          visualColor: row.visualColor,
          tannins: row.tannins,
          acidity: row.acidity,
          category: row.category,
          examples: row.examples,
          imageUrl: row.imageUrl,
          imageAlt: row.imageAlt,
        })),
      })),
    })),
  };
}

export async function importGuidesFromStaticFile(filePath = join(process.cwd(), "static", "guides.json")) {
  const prisma = getPrismaOrThrow();
  const raw = readFileSync(filePath, "utf8");
  const parsed = JSON.parse(raw) as GuidesStaticFile;

  let categoriesImported = 0;
  let guidesImported = 0;

  for (const guide of parsed.guides) {
    const category = guide.category;

    await prisma.category.upsert({
      where: { slug: category.slug },
      create: {
        slug: category.slug,
        position: category.position,
        title: category.title,
        summary: category.summary,
        abv: category.abv,
        origin: category.origin,
        imageUrl: category.imageUrl,
        imageAlt: category.imageAlt,
      },
      update: {
        position: category.position,
        title: category.title,
        summary: category.summary,
        abv: category.abv,
        origin: category.origin,
        imageUrl: category.imageUrl,
        imageAlt: category.imageAlt,
      },
    });
    categoriesImported += 1;

    await replaceGuideForCategory(category.slug, guideDetailToUpsertInput(guide));
    guidesImported += 1;
  }

  return { categoriesImported, guidesImported };
}

async function main() {
  const result = await importGuidesFromStaticFile();
  console.log("Importación desde static/guides.json:", result);
}

void main().catch((error) => {
  console.error(error);
  process.exit(1);
});
