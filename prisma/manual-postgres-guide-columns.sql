-- Opción A: ejecutar aquí o en el SQL editor del proveedor (PostgreSQL 11+).
-- Opción B (sin consola/SQL): POST /admin/migration/schema/apply-guide-metadata
--     con cabecera x-admin-migration-secret = valor de ADMIN_MIGRATION_SECRET en el API.
-- Nombres de tablas/columnas como los genera Prisma por defecto.

ALTER TABLE "GuideTab" ADD COLUMN IF NOT EXISTS "semanticKey" TEXT;
ALTER TABLE "GuideSection" ADD COLUMN IF NOT EXISTS "semanticKey" TEXT;
ALTER TABLE "GuideTable" ADD COLUMN IF NOT EXISTS "sectionSlug" TEXT;
ALTER TABLE "GuideTable" ADD COLUMN IF NOT EXISTS "semanticKey" TEXT;
