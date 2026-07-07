import type { ApiGuideDetail, ApiSubcategoryDetail } from "../domain/contracts";
import {
  effectiveSectionShowInNav,
  effectiveTabShowInNav,
  getGuideNavItems,
  isGuideNavSlug,
  sectionNavLabel,
  toSpiritDisplayLabel,
  toSpiritSubcategorySlug,
} from "../domain/guideNav";
import { listGuideDetails } from "./content";

function getSectionPreviewText(paragraphs: string[]): string {
  return paragraphs[0] ?? "";
}

function getSyntheticTabFromSection(
  guide: ApiGuideDetail,
  sourceTabSlug: string,
  sectionSlug: string,
): ApiSubcategoryDetail | null {
  const sourceTab = guide.tabs.find((tab) => tab.slug === sourceTabSlug);
  const section = sourceTab?.sections.find((item) => item.slug === sectionSlug);

  if (!sourceTab || !section) {
    return null;
  }

  return {
    id: section.id,
    slug: section.slug,
    label: sectionNavLabel(section.title),
    subtitle: section.subtitle,
    imageUrl: section.imageUrl,
    imageAlt: section.imageAlt,
    previewText: getSectionPreviewText(section.paragraphs),
    category: guide.category,
    guide: {
      id: guide.id,
      title: guide.title,
      type: guide.type,
    },
    tab: {
      ...sourceTab,
      id: `${sourceTab.id}-${section.id}`,
      slug: `${sourceTab.slug}-${section.slug}`,
      label: sectionNavLabel(section.title),
      panelTitle: sectionNavLabel(section.title),
      sections: [
        {
          id: section.id,
          slug: section.slug,
          title: section.title,
          subtitle: section.subtitle,
          imageUrl: section.imageUrl,
          imageAlt: section.imageAlt,
          showInNav: section.showInNav,
          paragraphs: [...section.paragraphs],
        },
      ],
      tables: [],
    },
  };
}

function findNavSection(guide: ApiGuideDetail, slug: string) {
  for (const tab of guide.tabs) {
    const section = tab.sections.find((item) => item.slug === slug);
    if (section && effectiveSectionShowInNav(guide.category.slug, tab, section)) {
      return { tab, section };
    }
  }

  return null;
}

function getSubcategoryFromGuide(guide: ApiGuideDetail, slug: string): ApiSubcategoryDetail | null {
  if (!isGuideNavSlug(guide, slug)) {
    return null;
  }

  const navTab = guide.tabs.find((tab) => {
    if (!effectiveTabShowInNav(guide.category.slug, tab)) {
      return false;
    }

    const navSlug =
      guide.category.slug === "destilados" ? toSpiritSubcategorySlug(tab.slug) : tab.slug;
    return navSlug === slug;
  });

  if (navTab) {
    const previewSection = navTab.sections[0];

    return {
      id: navTab.id,
      slug: guide.category.slug === "destilados" ? slug : navTab.slug,
      label:
        guide.category.slug === "destilados" ? toSpiritDisplayLabel(navTab.label) : navTab.label,
      subtitle: previewSection?.subtitle,
      imageUrl: previewSection?.imageUrl,
      imageAlt: previewSection?.imageAlt,
      previewText: previewSection
        ? getSectionPreviewText(previewSection.paragraphs)
        : (navTab.noteContent ?? ""),
      category: guide.category,
      guide: {
        id: guide.id,
        title: guide.title,
        type: guide.type,
      },
      tab: navTab,
    };
  }

  const navSection = findNavSection(guide, slug);
  if (!navSection) {
    return null;
  }

  const { tab: sourceTab, section } = navSection;
  const dedicatedTab = guide.tabs.find((tab) => tab.slug === section.slug);

  if (dedicatedTab) {
    return {
      id: section.id,
      slug: section.slug,
      label:
        guide.category.slug === "aperitivos"
          ? (dedicatedTab.label ?? section.title)
          : sectionNavLabel(section.title),
      subtitle: section.subtitle,
      imageUrl: section.imageUrl,
      imageAlt: section.imageAlt,
      previewText: getSectionPreviewText(section.paragraphs),
      category: guide.category,
      guide: {
        id: guide.id,
        title: guide.title,
        type: guide.type,
      },
      tab: dedicatedTab,
    };
  }

  return getSyntheticTabFromSection(guide, sourceTab.slug, slug);
}

export async function getSubcategoryBySlug(slug: string): Promise<ApiSubcategoryDetail | null> {
  const guides = await listGuideDetails();

  for (const guide of guides) {
    const subcategory = getSubcategoryFromGuide(guide, slug);
    if (subcategory) {
      return subcategory;
    }
  }

  return null;
}

export function listGuideNavItems(guide: ApiGuideDetail) {
  return getGuideNavItems(guide);
}
