ALTER TABLE "tenant" DROP CONSTRAINT "tenant_code_unique";--> statement-breakpoint
ALTER TABLE "tenant" ADD COLUMN "schema" text NOT NULL;--> statement-breakpoint
ALTER TABLE "tenant" DROP COLUMN "code";--> statement-breakpoint
ALTER TABLE "tenant" ADD CONSTRAINT "tenant_schema_unique" UNIQUE("schema");