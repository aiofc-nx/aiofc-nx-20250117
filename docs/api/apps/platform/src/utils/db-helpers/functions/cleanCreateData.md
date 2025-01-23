[AIOFC API 文档](../../../../../../index.md) / [apps/platform/src/utils/db-helpers](../index.md) / cleanCreateData

# Function: cleanCreateData()

> **cleanCreateData**\<`T`\>(`data`): `Omit`\<`Partial`\<`T`\>, `"id"` \| `"tenantId"` \| `"createdAt"` \| `"deletedAt"` \| `"updatedAt"`\>

Defined in: [apps/platform/src/utils/db-helpers.ts:18](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/utils/db-helpers.ts#L18)

从创建数据中移除所有基础字段（用于创建场景）

## Type Parameters

• **T** *extends* `Record`\<`string`, `any`\>

## Parameters

### data

`Partial`\<`T`\>

原始创建数据

## Returns

`Omit`\<`Partial`\<`T`\>, `"id"` \| `"tenantId"` \| `"createdAt"` \| `"deletedAt"` \| `"updatedAt"`\>

清理后的创建数据
