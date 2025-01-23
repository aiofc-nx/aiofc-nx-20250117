[AIOFC API 文档](../../../../../../index.md) / [apps/platform/src/utils/db-helpers](../index.md) / cleanUpdateData

# Function: cleanUpdateData()

> **cleanUpdateData**\<`T`\>(`data`): `Omit`\<`Partial`\<`T`\>, `"id"` \| `"tenantId"` \| `"createdAt"` \| `"deletedAt"`\>

Defined in: [apps/platform/src/utils/db-helpers.ts:6](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/utils/db-helpers.ts#L6)

从更新数据中移除基础字段（用于更新场景）

## Type Parameters

• **T** *extends* `Record`\<`string`, `any`\>

## Parameters

### data

`Partial`\<`T`\>

原始更新数据

## Returns

`Omit`\<`Partial`\<`T`\>, `"id"` \| `"tenantId"` \| `"createdAt"` \| `"deletedAt"`\>

清理后的更新数据
