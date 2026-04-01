import { toApiGuideDetail, toApiSubcategoryDetail, type GuideDetailRecord } from "../domain/serializers";
import type { ApiSubcategoryDetail } from "../domain/contracts";
import { prisma } from "../lib/prisma";
import { guideDetailInclude } from "../domain/serializers";

function isSpiritGuideTabSlug(slug: string): boolean {
  return slug.endsWith("-guia");
}

function toSpiritSubcategorySlug(tabSlug: string): string {
  return tabSlug.replace(/-guia$/, "");
}

function toSpiritDisplayLabel(label: string): string {
  return label.replace(/\s+desde\s+cero$/i, "");
}

function isAperitifSubcategorySourceTabSlug(slug: string): boolean {
  return slug === "ejemplos" || slug === "marcas-y-estilos";
}

function isWineSubcategorySourceTabSlug(slug: string): boolean {
  return slug === "estilos";
}

function isBeerSubcategorySourceTabSlug(slug: string): boolean {
  return slug === "por-color";
}

function isLiqueurSubcategoryTabSlug(slug: string): boolean {
  return !["que-son", "elaboracion", "familias", "servicio", "ejemplos"].includes(slug);
}

function getSyntheticTabFromSection(
  guide: GuideDetailRecord,
  sourceTabSlug: string,
  sectionSlug: string,
): ApiSubcategoryDetail | null {
  const sourceTab = guide.tabs.find((tab) => tab.slug === sourceTabSlug);
  const section = sourceTab?.sections.find((item) => item.slug === sectionSlug);

  if (!sourceTab || !section) {
    return null;
  }

  const apiGuide = toApiGuideDetail(guide);
  const apiSourceTab = apiGuide.tabs.find((tab) => tab.slug === sourceTabSlug);

  if (!apiSourceTab) {
    return null;
  }

  return toApiSubcategoryDetail({
    id: section.id,
    slug: section.slug,
    label: section.title.replace(/^\d+\.\s*/, ""),
    subtitle: section.subtitle,
    imageUrl: section.imageUrl,
    imageAlt: section.imageAlt,
    previewText: section.paragraphs[0]?.content ?? "",
    guide,
    tab: {
      ...apiSourceTab,
      id: `${apiSourceTab.id}-${section.id}`,
      slug: `${apiSourceTab.slug}-${section.slug}`,
      label: section.title.replace(/^\d+\.\s*/, ""),
      panelTitle: section.title.replace(/^\d+\.\s*/, ""),
      sections: [
        {
          id: section.id,
          slug: section.slug,
          title: section.title,
          subtitle: section.subtitle,
          imageUrl: section.imageUrl,
          imageAlt: section.imageAlt,
          paragraphs: section.paragraphs.map((paragraph) => paragraph.content),
        },
      ],
      tables: [],
    },
  });
}

function getSubcategoryFromGuide(guide: GuideDetailRecord, slug: string): ApiSubcategoryDetail | null {
  const apiGuide = toApiGuideDetail(guide);

  if (guide.category.slug === "destilados") {
    const matchingTab = guide.tabs.find((tab) => toSpiritSubcategorySlug(tab.slug) === slug);
    const apiTab = apiGuide.tabs.find((tab) => toSpiritSubcategorySlug(tab.slug) === slug);
    const previewSection = matchingTab?.sections[0];

    if (!matchingTab || !apiTab || !isSpiritGuideTabSlug(matchingTab.slug)) {
      return null;
    }

    return toApiSubcategoryDetail({
      id: matchingTab.id,
      slug,
      label: toSpiritDisplayLabel(matchingTab.label),
      subtitle: previewSection?.subtitle,
      imageUrl: previewSection?.imageUrl,
      imageAlt: previewSection?.imageAlt,
      previewText: previewSection?.paragraphs[0]?.content ?? matchingTab.noteContent ?? "",
      guide,
      tab: apiTab,
    });
  }

  if (guide.category.slug === "aperitivos") {
    for (const tab of guide.tabs.filter((item) => isAperitifSubcategorySourceTabSlug(item.slug))) {
      const match = getSyntheticTabFromSection(guide, tab.slug, slug);
      if (match) {
        return {
          ...match,
          label: match.label,
        };
      }
    }
  }

  if (guide.category.slug === "vino") {
    const sourceTab = guide.tabs.find((tab) => isWineSubcategorySourceTabSlug(tab.slug));
    const sourceSection = sourceTab?.sections.find((section) => section.slug === slug);
    const dedicatedApiTab = apiGuide.tabs.find((tab) => tab.slug === slug);

    if (!sourceSection) {
      return null;
    }

    if (dedicatedApiTab) {
      return toApiSubcategoryDetail({
        id: sourceSection.id,
        slug: sourceSection.slug,
        label: sourceSection.title.replace(/^\d+\.\s*/, ""),
        subtitle: sourceSection.subtitle,
        imageUrl: sourceSection.imageUrl,
        imageAlt: sourceSection.imageAlt,
        previewText: sourceSection.paragraphs[0]?.content ?? "",
        guide,
        tab: dedicatedApiTab,
      });
    }

    return getSyntheticTabFromSection(guide, "estilos", slug);
  }

  if (guide.category.slug === "cerveza") {
    return getSyntheticTabFromSection(guide, "por-color", slug);
  }

  if (guide.category.slug === "licores") {
    const matchingTab = guide.tabs.find((tab) => tab.slug === slug && isLiqueurSubcategoryTabSlug(tab.slug));
    const apiTab = apiGuide.tabs.find((tab) => tab.slug === slug);
    const previewSection = matchingTab?.sections[0];

    if (!matchingTab || !apiTab) {
      return null;
    }

    return toApiSubcategoryDetail({
      id: matchingTab.id,
      slug: matchingTab.slug,
      label: matchingTab.label,
      subtitle: previewSection?.subtitle,
      imageUrl: previewSection?.imageUrl,
      imageAlt: previewSection?.imageAlt,
      previewText: previewSection?.paragraphs[0]?.content ?? matchingTab.noteContent ?? "",
      guide,
      tab: apiTab,
    });
  }

  return null;
}

export async function getSubcategoryBySlug(slug: string): Promise<ApiSubcategoryDetail | null> {
  const guides = await prisma.guide.findMany({
    include: guideDetailInclude,
  });

  for (const guide of guides) {
    const subcategory = getSubcategoryFromGuide(guide, slug);
    if (subcategory) {
      return subcategory;
    }
  }

  return null;
}
