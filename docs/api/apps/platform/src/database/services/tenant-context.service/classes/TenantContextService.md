[AIOFC API 文档](../../../../../../../index.md) / [apps/platform/src/database/services/tenant-context.service](../index.md) / TenantContextService

# Class: TenantContextService

Defined in: [apps/platform/src/database/services/tenant-context.service.ts:13](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/database/services/tenant-context.service.ts#L13)

租户上下文服务

用于管理多租户系统中的租户Schema信息。
这里的Schema 是指租户在数据库中使用的Schema名称。
我们使用CLS来存储租户Schema信息，便于在请求时获取租户Schema。而不是从数据库中获取。
该服务的作用域为请求级别(REQUEST),确保每个请求都有其独立的租户上下文。

## Constructors

### new TenantContextService()

> **new TenantContextService**(`cls`): [`TenantContextService`](TenantContextService.md)

Defined in: [apps/platform/src/database/services/tenant-context.service.ts:18](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/database/services/tenant-context.service.ts#L18)

#### Parameters

##### cls

`ClsService`

#### Returns

[`TenantContextService`](TenantContextService.md)

## Properties

### cls

> `private` `readonly` **cls**: `ClsService`

Defined in: [apps/platform/src/database/services/tenant-context.service.ts:18](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/database/services/tenant-context.service.ts#L18)

***

### TENANT\_ID\_KEY

> `private` `readonly` **TENANT\_ID\_KEY**: `"tenantId"` = `'tenantId'`

Defined in: [apps/platform/src/database/services/tenant-context.service.ts:16](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/database/services/tenant-context.service.ts#L16)

***

### TENANT\_SCHEMA\_KEY

> `private` `readonly` **TENANT\_SCHEMA\_KEY**: `"tenantSchema"` = `'tenantSchema'`

Defined in: [apps/platform/src/database/services/tenant-context.service.ts:15](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/database/services/tenant-context.service.ts#L15)

## Methods

### getTenantId()

> **getTenantId**(): `string`

Defined in: [apps/platform/src/database/services/tenant-context.service.ts:54](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/database/services/tenant-context.service.ts#L54)

获取当前租户ID

#### Returns

`string`

当前租户的ID

#### Throws

如果租户ID未设置则抛出错误

***

### getTenantSchemaFromCls()

> **getTenantSchemaFromCls**(): `string`

Defined in: [apps/platform/src/database/services/tenant-context.service.ts:33](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/database/services/tenant-context.service.ts#L33)

获取当前租户Schema

#### Returns

`string`

当前租户的Schema标识符

#### Throws

如果租户上下文未设置则抛出错误

***

### setTenantId()

> **setTenantId**(`tenantId`): `void`

Defined in: [apps/platform/src/database/services/tenant-context.service.ts:45](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/database/services/tenant-context.service.ts#L45)

设置当前租户ID到CLS中

#### Parameters

##### tenantId

`string`

要设置的租户ID

#### Returns

`void`

***

### setTenantSchemaInCls()

> **setTenantSchemaInCls**(`schema`): `void`

Defined in: [apps/platform/src/database/services/tenant-context.service.ts:24](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/database/services/tenant-context.service.ts#L24)

设置当前租户Schema到CLS中

#### Parameters

##### schema

`string`

要设置的租户Schema标识符

#### Returns

`void`
