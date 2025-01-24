[@aiofc-nx-2025/source](../../../../../../../index.md) / apps/platform/src/modules/tenant/dto/tenant.dto

# apps/platform/src/modules/tenant/dto/tenant.dto

## Type Aliases

### CreateTenantDto

```ts
type CreateTenantDto = z.infer<typeof createTenantSchema>;
```

***

### UpdateTenantDto

```ts
type UpdateTenantDto = z.infer<typeof updateTenantSchema>;
```

## Variables

### createTenantSchema

```ts
const createTenantSchema: ZodObject<{
  category: ZodDefault<ZodNativeEnum<typeof TenantCategory>>;
  connection_string: ZodOptional<ZodString>;
  database: ZodString;
  description: ZodOptional<ZodString>;
  name: ZodString;
  organization_code: ZodOptional<ZodString>;
  organization_name: ZodOptional<ZodString>;
  schema: ZodString;
  status: ZodDefault<ZodNativeEnum<typeof TenantStatus>>;
 }, "strip", {
  category: TenantCategory;
  connection_string: string;
  database: string;
  description: string;
  name: string;
  organization_code: string;
  organization_name: string;
  schema: string;
  status: TenantStatus;
 }, {
  category: TenantCategory;
  connection_string: string;
  database: string;
  description: string;
  name: string;
  organization_code: string;
  organization_name: string;
  schema: string;
  status: TenantStatus;
}>;
```

***

### updateTenantSchema

```ts
const updateTenantSchema: ZodObject<{
  category: ZodOptional<ZodDefault<ZodNativeEnum<typeof TenantCategory>>>;
  connection_string: ZodOptional<ZodOptional<ZodString>>;
  database: ZodOptional<ZodString>;
  description: ZodOptional<ZodOptional<ZodString>>;
  name: ZodOptional<ZodString>;
  organization_code: ZodOptional<ZodOptional<ZodString>>;
  organization_name: ZodOptional<ZodOptional<ZodString>>;
  schema: ZodOptional<ZodString>;
  status: ZodOptional<ZodDefault<ZodNativeEnum<typeof TenantStatus>>>;
 }, "strip", {
  category: TenantCategory;
  connection_string: string;
  database: string;
  description: string;
  name: string;
  organization_code: string;
  organization_name: string;
  schema: string;
  status: TenantStatus;
 }, {
  category: TenantCategory;
  connection_string: string;
  database: string;
  description: string;
  name: string;
  organization_code: string;
  organization_name: string;
  schema: string;
  status: TenantStatus;
}>;
```
