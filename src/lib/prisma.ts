import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma";

declare global {
  // eslint-disable-next-line no-var
  var __alcoholPrisma__: PrismaClient | undefined;
}

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is required to initialize Prisma with PostgreSQL.");
}

const adapter = new PrismaPg({
  connectionString: databaseUrl,
});

export const prisma =
  global.__alcoholPrisma__ ??
  new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  global.__alcoholPrisma__ = prisma;
}
