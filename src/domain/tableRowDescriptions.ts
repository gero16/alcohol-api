const MULTI_DESCRIPTION_PREFIX = "__multi_description_json__:";

function sanitizeDescriptions(values: string[]): string[] {
  return values.map((value) => value.trim()).filter((value) => value.length > 0);
}

function tryParseJsonDescriptions(raw: string): string[] | null {
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return null;
    }
    const asStrings = parsed.filter((item): item is string => typeof item === "string");
    const cleaned = sanitizeDescriptions(asStrings);
    return cleaned.length > 0 ? cleaned : null;
  } catch {
    return null;
  }
}

export function encodeTableRowDescription(input: {
  description?: string;
  descriptions?: string[];
}): string | undefined {
  const fallbackDescription = input.description?.trim();
  const cleanedDescriptions = sanitizeDescriptions(input.descriptions ?? []);

  if (cleanedDescriptions.length === 0) {
    return fallbackDescription && fallbackDescription.length > 0 ? fallbackDescription : undefined;
  }

  if (cleanedDescriptions.length === 1) {
    return cleanedDescriptions[0];
  }

  return `${MULTI_DESCRIPTION_PREFIX}${JSON.stringify(cleanedDescriptions)}`;
}

export function decodeTableRowDescription(raw: string | null | undefined): {
  description?: string;
  descriptions?: string[];
} {
  const text = raw?.trim() ?? "";
  if (text.length === 0) {
    return {};
  }

  if (text.startsWith(MULTI_DESCRIPTION_PREFIX)) {
    const parsed = tryParseJsonDescriptions(text.slice(MULTI_DESCRIPTION_PREFIX.length));
    if (parsed && parsed.length > 0) {
      return {
        description: parsed[0],
        descriptions: parsed,
      };
    }
  }

  const asJson = tryParseJsonDescriptions(text);
  if (asJson && asJson.length > 0) {
    return {
      description: asJson[0],
      descriptions: asJson,
    };
  }

  return { description: text };
}
