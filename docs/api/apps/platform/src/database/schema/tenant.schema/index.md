[@aiofc-nx-2025/source](../../../../../../index.md) / apps/platform/src/database/schema/tenant.schema

# apps/platform/src/database/schema/tenant.schema

## Enumerations

| Enumeration | Description |
| ------ | ------ |
| [TenantCategory](enumerations/TenantCategory.md) | - |
| [TenantStatus](enumerations/TenantStatus.md) | - |

## Type Aliases

### NewTenant

```ts
type NewTenant = typeof tenantTable.$inferInsert;
```

***

### Tenant

```ts
type Tenant = typeof tenantTable.$inferSelect;
```

## Variables

### tenantRelations

```ts
const tenantRelations: Relations<{
  users: Many<string>;
}>;
```

***

### tenantTable

```ts
const tenantTable: PgTableWithColumns<{}>;
```
