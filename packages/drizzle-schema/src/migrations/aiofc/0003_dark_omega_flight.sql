ALTER TABLE "tenant" ADD COLUMN "database" varchar(50) NOT NULL;--> statement-breakpoint
ALTER TABLE "tenant" ADD COLUMN "status" varchar(20) DEFAULT 'active' NOT NULL;--> statement-breakpoint
ALTER TABLE "tenant" ADD COLUMN "connection_string" text;--> statement-breakpoint
ALTER TABLE "tenant" ADD COLUMN "organization_code" varchar(50);--> statement-breakpoint
ALTER TABLE "tenant" ADD COLUMN "organization_name" text;--> statement-breakpoint
ALTER TABLE "tenant" ADD COLUMN "category" varchar(20) DEFAULT 'other' NOT NULL;--> statement-breakpoint
ALTER TABLE "tenant" ADD CONSTRAINT "tenant_organization_code_unique" UNIQUE("organization_code");