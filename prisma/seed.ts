import { getPrismaOrThrow } from "../src/lib/prisma";

/**
 * Sin dataset en disco: PostgreSQL es la única fuente de verdad.
 * Este seed solo comprueba conexión; el contenido se carga por API o herramientas.
 */
async function main() {
  const prisma = getPrismaOrThrow();
  try {
    await prisma.$connect();
    console.log(
      "Seed: conexión a PostgreSQL correcta. Categorías, guías y glosario viven solo en la base (API / admin).",
    );
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
