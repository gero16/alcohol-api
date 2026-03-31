import "dotenv/config";
import { PrismaClient } from "../generated/prisma";

declare global {
  // eslint-disable-next-line no-var
  var __alcoholPrisma__: PrismaClient | undefined;
}

export const prisma =
  global.__alcoholPrisma__ ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  global.__alcoholPrisma__ = prisma;
}
