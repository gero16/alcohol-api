import { Prisma } from "../generated/prisma";

export const READ_ONLY_MODE_MESSAGE =
  "La base de datos no está disponible. La API está funcionando en modo solo lectura con el respaldo JSON.";

export class DatabaseUnavailableError extends Error {
  constructor(message = READ_ONLY_MODE_MESSAGE) {
    super(message);
    this.name = "DatabaseUnavailableError";
  }
}

export function createDatabaseUnavailableError(message?: string) {
  return new DatabaseUnavailableError(message);
}

export function isDatabaseUnavailableError(error: unknown): boolean {
  if (error instanceof DatabaseUnavailableError) {
    return true;
  }

  if (
    error instanceof Prisma.PrismaClientKnownRequestError &&
    (error.code === "P1010" || error.code === "P1017")
  ) {
    return true;
  }

  if (error instanceof Prisma.PrismaClientInitializationError) {
    return true;
  }

  if (error instanceof Error) {
    const message = error.message.toLowerCase();

    return (
      message.includes("database_url is required") ||
      message.includes("can't reach database server") ||
      message.includes("connection terminated unexpectedly") ||
      message.includes("connect econnrefused") ||
      message.includes("connect etimedout") ||
      message.includes("user was denied access") ||
      message.includes("server has closed the connection") ||
      message.includes("connection closed") ||
      message.includes("database is unavailable") ||
      message.includes("remaining connection slots are reserved") ||
      message.includes("the database system is starting up")
    );
  }

  return false;
}
