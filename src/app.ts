import Fastify from "fastify";
import cors from "@fastify/cors";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";
import { categoriesRoutes } from "./routes/categories";
import { guidesRoutes } from "./routes/guides";

export function buildApp() {
  const app = Fastify({
    logger: true,
  });

  app.register(cors, {
    origin: true,
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

  return app;
}
