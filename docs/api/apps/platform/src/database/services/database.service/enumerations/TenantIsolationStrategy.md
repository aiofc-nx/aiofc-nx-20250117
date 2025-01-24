[@aiofc-nx-2025/source](../../../../../../../index.md) / [apps/platform/src/database/services/database.service](../index.md) / TenantIsolationStrategy

# Enumeration: TenantIsolationStrategy

租户隔离策略枚举

## Description

定义了多租户系统中数据隔离的两种策略:
- SCHEMA: 使用独立的数据库Schema来隔离不同租户的数据
- ROW: 在同一个Schema中使用行级安全性来隔离不同租户的数据

## Enumeration Members

### ROW

```ts
ROW: "row";
```

使用行级安全策略进行租户隔离

***

### SCHEMA

```ts
SCHEMA: "schema";
```

使用独立Schema进行租户隔离
