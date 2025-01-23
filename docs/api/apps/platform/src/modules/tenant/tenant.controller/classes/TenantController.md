[AIOFC API 文档](../../../../../../../index.md) / [apps/platform/src/modules/tenant/tenant.controller](../index.md) / TenantController

# Class: TenantController

Defined in: [apps/platform/src/modules/tenant/tenant.controller.ts:21](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/tenant/tenant.controller.ts#L21)

## Constructors

### new TenantController()

> **new TenantController**(`tenantService`): [`TenantController`](TenantController.md)

Defined in: [apps/platform/src/modules/tenant/tenant.controller.ts:22](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/tenant/tenant.controller.ts#L22)

#### Parameters

##### tenantService

[`TenantService`](../../tenant.service/classes/TenantService.md)

#### Returns

[`TenantController`](TenantController.md)

## Properties

### tenantService

> `private` **tenantService**: [`TenantService`](../../tenant.service/classes/TenantService.md)

Defined in: [apps/platform/src/modules/tenant/tenant.controller.ts:22](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/tenant/tenant.controller.ts#L22)

## Methods

### create()

> **create**(`data`): `Promise`\<\{ `category`: `string`; `connection_string`: `string`; `createdAt`: `Date`; `database`: `string`; `deletedAt`: `Date`; `description`: `string`; `id`: `string`; `name`: `string`; `organization_code`: `string`; `organization_name`: `string`; `schema`: `string`; `status`: `string`; `tenantId`: `string`; `updatedAt`: `Date`; \}\>

Defined in: [apps/platform/src/modules/tenant/tenant.controller.ts:25](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/tenant/tenant.controller.ts#L25)

#### Parameters

##### data

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

***

### delete()

> **delete**(`id`): `Promise`\<`boolean`\>

Defined in: [apps/platform/src/modules/tenant/tenant.controller.ts:52](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/tenant/tenant.controller.ts#L52)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`boolean`\>

***

### findAll()

> **findAll**(): `Promise`\<`object`[]\>

Defined in: [apps/platform/src/modules/tenant/tenant.controller.ts:38](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/tenant/tenant.controller.ts#L38)

#### Returns

`Promise`\<`object`[]\>

***

### findById()

> **findById**(`id`): `Promise`\<\{ `category`: `string`; `connection_string`: `string`; `createdAt`: `Date`; `database`: `string`; `deletedAt`: `Date`; `description`: `string`; `id`: `string`; `name`: `string`; `organization_code`: `string`; `organization_name`: `string`; `schema`: `string`; `status`: `string`; `tenantId`: `string`; `updatedAt`: `Date`; \}\>

Defined in: [apps/platform/src/modules/tenant/tenant.controller.ts:33](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/tenant/tenant.controller.ts#L33)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<\{ `category`: `string`; `connection_string`: `string`; `createdAt`: `Date`; `database`: `string`; `deletedAt`: `Date`; `description`: `string`; `id`: `string`; `name`: `string`; `organization_code`: `string`; `organization_name`: `string`; `schema`: `string`; `status`: `string`; `tenantId`: `string`; `updatedAt`: `Date`; \}\>

***

### update()

> **update**(`id`, `data`): `Promise`\<\{ `category`: `string`; `connection_string`: `string`; `createdAt`: `Date`; `database`: `string`; `deletedAt`: `Date`; `description`: `string`; `id`: `string`; `name`: `string`; `organization_code`: `string`; `organization_name`: `string`; `schema`: `string`; `status`: `string`; `tenantId`: `string`; `updatedAt`: `Date`; \}\>

Defined in: [apps/platform/src/modules/tenant/tenant.controller.ts:43](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/tenant/tenant.controller.ts#L43)

#### Parameters

##### id

`string`

##### data

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
