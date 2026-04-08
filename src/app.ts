import path from "node:path";
import Fastify from "fastify";
import cors from "@fastify/cors";
import staticFiles from "@fastify/static";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";
import { adminMigrationRoutes } from "./routes/adminMigration";
import { categoriesRoutes } from "./routes/categories";
import { glossaryRoutes } from "./routes/glossary";
import { guidesRoutes } from "./routes/guides";
import { subcategoriesRoutes } from "./routes/subcategories";

export async function buildApp() {
  const app = Fastify({
    logger: true,
  });

  app.register(cors, {
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "x-admin-migration-secret"],
  });

  app.register(swagger, {
    openapi: {
      info: {
        title: "Alcoholes API",
        description: "API REST para categorías y guías de bebidas alcohólicas.",
        version: "1.0.0",
      },
      servers: [
        {
          url: "http://localhost:3001",
          description: "Servidor local",
        },
      ],
    },
  });

  app.register(swaggerUi, {
    routePrefix: "/docs",
  });

  await app.register(staticFiles, {
    root: path.join(process.cwd(), "static"),
    prefix: "/static/",
    decorateReply: false,
  });

  app.get(
    "/health",
    {
      schema: {
        tags: ["System"],
        summary: "Comprobar el estado del servicio",
      },
    },
    async () => ({
      status: "ok",
      service: "alcohol-api",
    }),
  );

  app.register(categoriesRoutes, {
    prefix: "/categories",
  });

  app.register(guidesRoutes, {
    prefix: "/guides",
  });

  app.register(glossaryRoutes, {
    prefix: "/glossary",
  });

  app.register(subcategoriesRoutes, {
    prefix: "/subcategories",
  });

  app.register(adminMigrationRoutes, {
    prefix: "/admin/migration",
  });

  return app;
}
