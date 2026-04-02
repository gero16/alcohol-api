/**
 * Inserta las pestañas de ron-extra-tabs.json en la guía destilados de alcohol-data.json
 * (antes de ginebra-guia) y reindexa position. Idempotente si ya existen.
 */
import * as fs from "node:fs";
import * as path from "node:path";
import type { SeedGuideTab } from "../domain/contracts";

const root = path.join(__dirname, "..");
const dataPath = path.join(root, "content/alcohol-data.json");
const extraPath = path.join(root, "content/ron-extra-tabs.json");

const data = JSON.parse(fs.readFileSync(dataPath, "utf8")) as {
  guides: Array<{ categorySlug: string; tabs: SeedGuideTab[] }>;
};

const extra = JSON.parse(fs.readFileSync(extraPath, "utf8")) as SeedGuideTab[];

const guide = data.guides.find((g) => g.categorySlug === "destilados");
if (!guide) {
  throw new Error("No se encontró guides[] con categorySlug destilados");
}

if (guide.tabs.some((t) => t.slug === "ron-clasificacion")) {
  console.log("Las pestañas extendidas de ron ya están en alcohol-data.json; no se modifica nada.");
  process.exit(0);
}

const idx = guide.tabs.findIndex((t) => t.slug === "ginebra-guia");
if (idx < 0) {
  throw new Error("No se encontró la pestaña ginebra-guia para insertar antes");
}

guide.tabs.splice(idx, 0, ...extra);
guide.tabs.forEach((t, i) => {
  t.position = i;
});

fs.writeFileSync(dataPath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
console.log(`Insertadas ${extra.length} pestañas de ron; positions: 0–${guide.tabs.length - 1}`);
