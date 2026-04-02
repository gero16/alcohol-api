import type { Prisma } from "../generated/prisma";

export function classificationParagraphsFromJson(value: Prisma.JsonValue): string[] {
  if (value === null || value === undefined) {
    return [];
  }
  if (Array.isArray(value)) {
    return value.filter((item): item is string => typeof item === "string");
  }
  return [];
}

export function classificationParagraphsToJson(paragraphs: string[]): Prisma.InputJsonValue {
  return paragraphs as Prisma.InputJsonValue;
}
