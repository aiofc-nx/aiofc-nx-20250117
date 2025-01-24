[@aiofc-nx-2025/source](../../../../../index.md) / apps/platform/src/utils/db-helpers

# apps/platform/src/utils/db-helpers

## Functions

### cleanCreateData()

```ts
function cleanCreateData<T>(data): Omit<Partial<T>, "id" | "tenantId" | "createdAt" | "deletedAt" | "updatedAt">
```

从创建数据中移除所有基础字段（用于创建场景）

#### Type Parameters

• **T** *extends* `Record`\<`string`, `any`\>

#### Parameters

##### data

`Partial`\<`T`\>

原始创建数据

#### Returns

`Omit`\<`Partial`\<`T`\>, `"id"` \| `"tenantId"` \| `"createdAt"` \| `"deletedAt"` \| `"updatedAt"`\>

清理后的创建数据

***

### cleanUpdateData()

```ts
function cleanUpdateData<T>(data): Omit<Partial<T>, "id" | "tenantId" | "createdAt" | "deletedAt">
```

从更新数据中移除基础字段（用于更新场景）

#### Type Parameters

• **T** *extends* `Record`\<`string`, `any`\>

#### Parameters

##### data

`Partial`\<`T`\>

原始更新数据

#### Returns

`Omit`\<`Partial`\<`T`\>, `"id"` \| `"tenantId"` \| `"createdAt"` \| `"deletedAt"`\>

清理后的更新数据
