[AIOFC API 文档](../../../../../../../index.md) / [apps/platform/src/database/services/database.service](../index.md) / TenantIsolationStrategy

# Enumeration: TenantIsolationStrategy

Defined in: [apps/platform/src/database/services/database.service.ts:15](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/database/services/database.service.ts#L15)

租户隔离策略枚举

## Description

定义了多租户系统中数据隔离的两种策略:
- SCHEMA: 使用独立的数据库Schema来隔离不同租户的数据
- ROW: 在同一个Schema中使用行级安全性来隔离不同租户的数据

## Enumeration Members

### ROW

> **ROW**: `"row"`

Defined in: [apps/platform/src/database/services/database.service.ts:19](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/database/services/database.service.ts#L19)

使用行级安全策略进行租户隔离

***

### SCHEMA

> **SCHEMA**: `"schema"`

Defined in: [apps/platform/src/database/services/database.service.ts:17](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/database/services/database.service.ts#L17)

使用独立Schema进行租户隔离
