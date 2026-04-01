import { buildApp } from "./app";
import { config } from "./config";
import { prisma } from "./lib/prisma";

async function start() {
  const app = buildApp();

  try {
    await app.listen({
      host: config.host,
      port: config.port,
    });
  } catch (error) {
    app.log.error(error);
    if (prisma) {
      await prisma.$disconnect();
    }
    process.exit(1);
  }
}

void start();
