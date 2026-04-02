import type { Prisma } from "../generated/prisma";
import type { GuideClassificationBlock } from "./contracts";

export function classificationBlocksFromJson(value: Prisma.JsonValue): GuideClassificationBlock[] {
  if (!Array.isArray(value)) {
    return [];
  }
  const out: GuideClassificationBlock[] = [];
  for (const item of value) {
    if (!item || typeof item !== "object" || Array.isArray(item)) {
      continue;
    }
    const o = item as Record<string, unknown>;
    const kind = o.kind;
    if (kind === "subtitle" && typeof o.text === "string") {
      out.push({ kind: "subtitle", text: o.text });
    } else if (kind === "paragraph" && typeof o.text === "string") {
      out.push({ kind: "paragraph", text: o.text });
    } else if (kind === "image" && typeof o.url === "string") {
      out.push({
        kind: "image",
        url: o.url,
        alt: typeof o.alt === "string" ? o.alt : "",
      });
    }
  }
  return out;
}

export function classificationBlocksToJson(blocks: GuideClassificationBlock[]): Prisma.InputJsonValue {
  return blocks as unknown as Prisma.InputJsonValue;
}
