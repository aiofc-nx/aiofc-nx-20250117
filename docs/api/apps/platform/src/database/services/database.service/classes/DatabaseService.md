[AIOFC API 文档](../../../../../../../index.md) / [apps/platform/src/database/services/database.service](../index.md) / DatabaseService

# Class: DatabaseService

Defined in: [apps/platform/src/database/services/database.service.ts:34](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/database/services/database.service.ts#L34)

数据库服务

用于管理多租户数据库连接和租户隔离的服务类。
实现了数据库初始化、租户schema创建、连接池管理等功能。

## Implements

- `OnModuleInit`

## Constructors

### new DatabaseService()

> **new DatabaseService**(`env`): [`DatabaseService`](DatabaseService.md)

Defined in: [apps/platform/src/database/services/database.service.ts:45](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/database/services/database.service.ts#L45)

构造函数

#### Parameters

##### env

[`DatabaseConfig`](../../../../config/database.config/classes/DatabaseConfig.md)

配置服务,用于获取数据库连接配置

#### Returns

[`DatabaseService`](DatabaseService.md)

## Properties

### client

> `private` **client**: `Sql`

Defined in: [apps/platform/src/database/services/database.service.ts:36](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/database/services/database.service.ts#L36)

PostgreSQL 客户端实例

***

### db

> `private` **db**: `any`

Defined in: [apps/platform/src/database/services/database.service.ts:37](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/database/services/database.service.ts#L37)

***

### env

> `private` **env**: [`DatabaseConfig`](../../../../config/database.config/classes/DatabaseConfig.md)

Defined in: [apps/platform/src/database/services/database.service.ts:45](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/database/services/database.service.ts#L45)

配置服务,用于获取数据库连接配置

***

### isolationStrategy

> `private` **isolationStrategy**: [`TenantIsolationStrategy`](../enumerations/TenantIsolationStrategy.md)

Defined in: [apps/platform/src/database/services/database.service.ts:38](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/database/services/database.service.ts#L38)

***

### query

> `readonly` **query**: `any`

Defined in: [apps/platform/src/database/services/database.service.ts:39](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/database/services/database.service.ts#L39)

## Methods

### checkSchemaExistsInDb()

> **checkSchemaExistsInDb**(`schemaName`): `Promise`\<`boolean`\>

Defined in: [apps/platform/src/database/services/database.service.ts:94](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/database/services/database.service.ts#L94)

检查Schema是否存在

#### Parameters

##### schemaName

`string`

#### Returns

`Promise`\<`boolean`\>

***

### createTenantSchema()

> **createTenantSchema**(`schema`): `Promise`\<\{ `error`: `string`; `success`: `boolean`; \}\>

Defined in: [apps/platform/src/database/services/database.service.ts:107](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/database/services/database.service.ts#L107)

创建租户Schema

#### Parameters

##### schema

`string`

#### Returns

`Promise`\<\{ `error`: `string`; `success`: `boolean`; \}\>

***

### getTenantDB()

> **getTenantDB**(`tenantId`): `Promise`\<`any`\>

Defined in: [apps/platform/src/database/services/database.service.ts:163](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/database/services/database.service.ts#L163)

获取数据库连接

#### Parameters

##### tenantId

`string`

租户ID

#### Returns

`Promise`\<`any`\>

返回数据库连接实例

#### Throws

当Schema不存在时抛出错误

***

### getTenantInfo()

> **getTenantInfo**(`tenantId`): `Promise`\<`any`\>

Defined in: [apps/platform/src/database/services/database.service.ts:199](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/database/services/database.service.ts#L199)

根据租户ID查询租户信息

#### Parameters

##### tenantId

`string`

租户的唯一标识符

#### Returns

`Promise`\<`any`\>

返回查询到的租户信息，如果未找到则返回null

***

### getTenantSchema()

> `private` **getTenantSchema**(`tenantId`): `Promise`\<`string`\>

Defined in: [apps/platform/src/database/services/database.service.ts:149](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/database/services/database.service.ts#L149)

获取租户的数据库Schema名称

#### Parameters

##### tenantId

`string`

租户ID

#### Returns

`Promise`\<`string`\>

租户使用的数据库schema名称

***

### initializeSchemaStructure()

> `private` **initializeSchemaStructure**(`schemaName`): `Promise`\<`void`\>

Defined in: [apps/platform/src/database/services/database.service.ts:132](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/database/services/database.service.ts#L132)

初始化Schema的表结构

#### Parameters

##### schemaName

`string`

#### Returns

`Promise`\<`void`\>

***

### onModuleInit()

> **onModuleInit**(): `Promise`\<`void`\>

Defined in: [apps/platform/src/database/services/database.service.ts:70](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/database/services/database.service.ts#L70)

模块初始化钩子
启用行级安全性

#### Returns

`Promise`\<`void`\>

#### Implementation of

`OnModuleInit.onModuleInit`

***

### setTenantContext()

> **setTenantContext**(`tenantId`): `Promise`\<`void`\>

Defined in: [apps/platform/src/database/services/database.service.ts:189](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/database/services/database.service.ts#L189)

设置当前租户上下文
在数据库会话中设置当前租户ID

#### Parameters

##### tenantId

`string`

租户ID

#### Returns

`Promise`\<`void`\>
