[@aiofc-nx-2025/source](../../../../../../../index.md) / [apps/platform/src/database/services/database.service](../index.md) / DatabaseService

# Class: DatabaseService

数据库服务

用于管理多租户数据库连接和租户隔离的服务类。
实现了数据库初始化、租户schema创建、连接池管理等功能。

## Implements

- `OnModuleInit`

## Constructors

### new DatabaseService()

```ts
new DatabaseService(env): DatabaseService
```

构造函数

#### Parameters

##### env

[`DatabaseConfig`](../../../../config/database.config/classes/DatabaseConfig.md)

配置服务,用于获取数据库连接配置

#### Returns

[`DatabaseService`](DatabaseService.md)

## Properties

### client

```ts
private client: Sql;
```

PostgreSQL 客户端实例

***

### db

```ts
private db: any;
```

***

### env

```ts
private env: DatabaseConfig;
```

配置服务,用于获取数据库连接配置

***

### isolationStrategy

```ts
private isolationStrategy: TenantIsolationStrategy;
```

***

### query

```ts
readonly query: any;
```

## Methods

### checkSchemaExistsInDb()

```ts
checkSchemaExistsInDb(schemaName): Promise<boolean>
```

检查Schema是否存在

#### Parameters

##### schemaName

`string`

#### Returns

`Promise`\<`boolean`\>

***

### createTenantSchema()

```ts
createTenantSchema(schema): Promise<{
  error: string;
  success: boolean;
}>
```

创建租户Schema

#### Parameters

##### schema

`string`

#### Returns

`Promise`\<\{
  `error`: `string`;
  `success`: `boolean`;
 \}\>

***

### getTenantDB()

```ts
getTenantDB(tenantId): Promise<any>
```

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

```ts
getTenantInfo(tenantId): Promise<any>
```

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

```ts
private getTenantSchema(tenantId): Promise<string>
```

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

```ts
private initializeSchemaStructure(schemaName): Promise<void>
```

初始化Schema的表结构

#### Parameters

##### schemaName

`string`

#### Returns

`Promise`\<`void`\>

***

### onModuleInit()

```ts
onModuleInit(): Promise<void>
```

模块初始化钩子
启用行级安全性

#### Returns

`Promise`\<`void`\>

#### Implementation of

```ts
OnModuleInit.onModuleInit
```

***

### setTenantContext()

```ts
setTenantContext(tenantId): Promise<void>
```

设置当前租户上下文
在数据库会话中设置当前租户ID

#### Parameters

##### tenantId

`string`

租户ID

#### Returns

`Promise`\<`void`\>
