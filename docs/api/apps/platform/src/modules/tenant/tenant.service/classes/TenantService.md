[AIOFC API 文档](../../../../../../../index.md) / [apps/platform/src/modules/tenant/tenant.service](../index.md) / TenantService

# Class: TenantService

Defined in: [apps/platform/src/modules/tenant/tenant.service.ts:26](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/tenant/tenant.service.ts#L26)

租户服务类
提供租户相关的增删改查等操作

## Example

```ts
const tenantService = new TenantService(db);
const tenant = await tenantService.create({
  code: 'TEST',
  name: '测试租户'
});
```

## Constructors

### new TenantService()

> **new TenantService**(`db`): [`TenantService`](TenantService.md)

Defined in: [apps/platform/src/modules/tenant/tenant.service.ts:27](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/tenant/tenant.service.ts#L27)

#### Parameters

##### db

[`DatabaseService`](../../../../database/services/database.service/classes/DatabaseService.md)

#### Returns

[`TenantService`](TenantService.md)

## Properties

### db

> `private` **db**: [`DatabaseService`](../../../../database/services/database.service/classes/DatabaseService.md)

Defined in: [apps/platform/src/modules/tenant/tenant.service.ts:27](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/tenant/tenant.service.ts#L27)

## Methods

### checkSchemaExists()

> `private` **checkSchemaExists**(`schema`, `excludeId`?): `Promise`\<`void`\>

Defined in: [apps/platform/src/modules/tenant/tenant.service.ts:40](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/tenant/tenant.service.ts#L40)

检查租户Schema标识是否已存在

#### Parameters

##### schema

`string`

租户Schema标识

##### excludeId?

`string`

需要排除的租户ID(用于更新场景)

#### Returns

`Promise`\<`void`\>

#### Throws

当租户Schema标识已存在时抛出异常

#### Example

```ts
await tenantService.checkSchemaExists('t_test');
```

***

### create()

> **create**(`data`): `Promise`\<\{ `category`: `string`; `connection_string`: `string`; `createdAt`: `Date`; `database`: `string`; `deletedAt`: `Date`; `description`: `string`; `id`: `string`; `name`: `string`; `organization_code`: `string`; `organization_name`: `string`; `schema`: `string`; `status`: `string`; `tenantId`: `string`; `updatedAt`: `Date`; \}\>

Defined in: [apps/platform/src/modules/tenant/tenant.service.ts:69](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/tenant/tenant.service.ts#L69)

创建新租户

#### Parameters

##### data

租户创建数据

###### category

[`TenantCategory`](../../../../database/schema/tenant.schema/enumerations/TenantCategory.md) = `...`

###### connection_string

`string` = `...`

###### database

`string` = `...`

###### description

`string` = `...`

###### name

`string` = `...`

###### organization_code

`string` = `...`

###### organization_name

`string` = `...`

###### schema

`string` = `...`

###### status

[`TenantStatus`](../../../../database/schema/tenant.schema/enumerations/TenantStatus.md) = `...`

#### Returns

`Promise`\<\{ `category`: `string`; `connection_string`: `string`; `createdAt`: `Date`; `database`: `string`; `deletedAt`: `Date`; `description`: `string`; `id`: `string`; `name`: `string`; `organization_code`: `string`; `organization_name`: `string`; `schema`: `string`; `status`: `string`; `tenantId`: `string`; `updatedAt`: `Date`; \}\>

创建的租户信息

#### Example

```ts
const tenant = await tenantService.create({
  schema: 'TEST',
  name: '测试租户'
});
```

***

### delete()

> **delete**(`id`): `Promise`\<`boolean`\>

Defined in: [apps/platform/src/modules/tenant/tenant.service.ts:166](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/tenant/tenant.service.ts#L166)

软删除租户

#### Parameters

##### id

`string`

租户ID

#### Returns

`Promise`\<`boolean`\>

是否删除成功

#### Example

```ts
const isDeleted = await tenantService.delete('123e4567-e89b-12d3-a456-426614174000');
```

***

### findAll()

> **findAll**(): `Promise`\<`object`[]\>

Defined in: [apps/platform/src/modules/tenant/tenant.service.ts:116](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/tenant/tenant.service.ts#L116)

获取所有未删除的租户列表

#### Returns

`Promise`\<`object`[]\>

租户列表

#### Example

```ts
const tenants = await tenantService.findAll();
```

***

### findById()

> **findById**(`id`): `Promise`\<\{ `category`: `string`; `connection_string`: `string`; `createdAt`: `Date`; `database`: `string`; `deletedAt`: `Date`; `description`: `string`; `id`: `string`; `name`: `string`; `organization_code`: `string`; `organization_name`: `string`; `schema`: `string`; `status`: `string`; `tenantId`: `string`; `updatedAt`: `Date`; \}\>

Defined in: [apps/platform/src/modules/tenant/tenant.service.ts:96](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/tenant/tenant.service.ts#L96)

根据ID查找租户

#### Parameters

##### id

`string`

租户ID

#### Returns

`Promise`\<\{ `category`: `string`; `connection_string`: `string`; `createdAt`: `Date`; `database`: `string`; `deletedAt`: `Date`; `description`: `string`; `id`: `string`; `name`: `string`; `organization_code`: `string`; `organization_name`: `string`; `schema`: `string`; `status`: `string`; `tenantId`: `string`; `updatedAt`: `Date`; \}\>

租户信息，如果不存在则返回null

#### Example

```ts
const tenant = await tenantService.findById('123e4567-e89b-12d3-a456-426614174000');
```

***

### forceDelete()

> **forceDelete**(`id`): `Promise`\<`boolean`\>

Defined in: [apps/platform/src/modules/tenant/tenant.service.ts:189](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/tenant/tenant.service.ts#L189)

强制删除租户（物理删除）

#### Parameters

##### id

`string`

租户ID

#### Returns

`Promise`\<`boolean`\>

是否删除成功

#### Example

```ts
const isDeleted = await tenantService.forceDelete('123e4567-e89b-12d3-a456-426614174000');
```

***

### restore()

> **restore**(`id`): `Promise`\<\{ `category`: `string`; `connection_string`: `string`; `createdAt`: `Date`; `database`: `string`; `deletedAt`: `Date`; `description`: `string`; `id`: `string`; `name`: `string`; `organization_code`: `string`; `organization_name`: `string`; `schema`: `string`; `status`: `string`; `tenantId`: `string`; `updatedAt`: `Date`; \}\>

Defined in: [apps/platform/src/modules/tenant/tenant.service.ts:208](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/tenant/tenant.service.ts#L208)

恢复已删除的租户

#### Parameters

##### id

`string`

租户ID

#### Returns

`Promise`\<\{ `category`: `string`; `connection_string`: `string`; `createdAt`: `Date`; `database`: `string`; `deletedAt`: `Date`; `description`: `string`; `id`: `string`; `name`: `string`; `organization_code`: `string`; `organization_name`: `string`; `schema`: `string`; `status`: `string`; `tenantId`: `string`; `updatedAt`: `Date`; \}\>

恢复后的租户信息，如果租户不存在则返回null

#### Example

```ts
const restoredTenant = await tenantService.restore('123e4567-e89b-12d3-a456-426614174000');
```

***

### update()

> **update**(`id`, `data`): `Promise`\<\{ `category`: `string`; `connection_string`: `string`; `createdAt`: `Date`; `database`: `string`; `deletedAt`: `Date`; `description`: `string`; `id`: `string`; `name`: `string`; `organization_code`: `string`; `organization_name`: `string`; `schema`: `string`; `status`: `string`; `tenantId`: `string`; `updatedAt`: `Date`; \}\>

Defined in: [apps/platform/src/modules/tenant/tenant.service.ts:137](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/tenant/tenant.service.ts#L137)

更新租户信息

#### Parameters

##### id

`string`

租户ID

##### data

`Partial`\<\{ `database`: `string`; `name`: `string`; `schema`: `string`; `tenantId`: `string`; \}\>

需要更新的租户数据

#### Returns

`Promise`\<\{ `category`: `string`; `connection_string`: `string`; `createdAt`: `Date`; `database`: `string`; `deletedAt`: `Date`; `description`: `string`; `id`: `string`; `name`: `string`; `organization_code`: `string`; `organization_name`: `string`; `schema`: `string`; `status`: `string`; `tenantId`: `string`; `updatedAt`: `Date`; \}\>

更新后的租户信息，如果租户不存在则返回null

#### Example

```ts
const updatedTenant = await tenantService.update('123e4567-e89b-12d3-a456-426614174000', {
  name: '更新后的租户名称'
});
```
