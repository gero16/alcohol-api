import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma";
import { createDatabaseUnavailableError } from "./database";

declare global {
  // eslint-disable-next-line no-var
  var __alcoholPrisma__: PrismaClient | undefined;
}

const databaseUrl = process.env.DATABASE_URL;

function createPrismaClient() {
  if (!databaseUrl) {
    return null;
  }

  const adapter = new PrismaPg({
    connectionString: databaseUrl,
  });

  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });
}

export const prisma = global.__alcoholPrisma__ ?? createPrismaClient();

if (process.env.NODE_ENV !== "production" && prisma) {
  global.__alcoholPrisma__ = prisma;
}

export function getPrismaOrThrow() {
  if (!prisma) {
    throw createDatabaseUnavailableError(
      "DATABASE_URL no está configurada. La base de datos no está disponible.",
    );
  }

  return prisma;
}
