[@aiofc-nx-2025/source](../../../../../../../index.md) / [apps/platform/src/modules/tenant/tenant.service](../index.md) / TenantService

# Class: TenantService

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

```ts
new TenantService(db): TenantService
```

#### Parameters

##### db

[`DatabaseService`](../../../../database/services/database.service/classes/DatabaseService.md)

#### Returns

[`TenantService`](TenantService.md)

## Properties

### db

```ts
private db: DatabaseService;
```

## Methods

### checkSchemaExists()

```ts
private checkSchemaExists(schema, excludeId?): Promise<void>
```

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

```ts
create(data): Promise<{
  category: string;
  connection_string: string;
  createdAt: Date;
  database: string;
  deletedAt: Date;
  description: string;
  id: string;
  name: string;
  organization_code: string;
  organization_name: string;
  schema: string;
  status: string;
  tenantId: string;
  updatedAt: Date;
}>
```

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

`Promise`\<\{
  `category`: `string`;
  `connection_string`: `string`;
  `createdAt`: `Date`;
  `database`: `string`;
  `deletedAt`: `Date`;
  `description`: `string`;
  `id`: `string`;
  `name`: `string`;
  `organization_code`: `string`;
  `organization_name`: `string`;
  `schema`: `string`;
  `status`: `string`;
  `tenantId`: `string`;
  `updatedAt`: `Date`;
 \}\>

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

```ts
delete(id): Promise<boolean>
```

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

```ts
findAll(): Promise<object[]>
```

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

```ts
findById(id): Promise<{
  category: string;
  connection_string: string;
  createdAt: Date;
  database: string;
  deletedAt: Date;
  description: string;
  id: string;
  name: string;
  organization_code: string;
  organization_name: string;
  schema: string;
  status: string;
  tenantId: string;
  updatedAt: Date;
}>
```

根据ID查找租户

#### Parameters

##### id

`string`

租户ID

#### Returns

`Promise`\<\{
  `category`: `string`;
  `connection_string`: `string`;
  `createdAt`: `Date`;
  `database`: `string`;
  `deletedAt`: `Date`;
  `description`: `string`;
  `id`: `string`;
  `name`: `string`;
  `organization_code`: `string`;
  `organization_name`: `string`;
  `schema`: `string`;
  `status`: `string`;
  `tenantId`: `string`;
  `updatedAt`: `Date`;
 \}\>

租户信息，如果不存在则返回null

#### Example

```ts
const tenant = await tenantService.findById('123e4567-e89b-12d3-a456-426614174000');
```

***

### forceDelete()

```ts
forceDelete(id): Promise<boolean>
```

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

```ts
restore(id): Promise<{
  category: string;
  connection_string: string;
  createdAt: Date;
  database: string;
  deletedAt: Date;
  description: string;
  id: string;
  name: string;
  organization_code: string;
  organization_name: string;
  schema: string;
  status: string;
  tenantId: string;
  updatedAt: Date;
}>
```

恢复已删除的租户

#### Parameters

##### id

`string`

租户ID

#### Returns

`Promise`\<\{
  `category`: `string`;
  `connection_string`: `string`;
  `createdAt`: `Date`;
  `database`: `string`;
  `deletedAt`: `Date`;
  `description`: `string`;
  `id`: `string`;
  `name`: `string`;
  `organization_code`: `string`;
  `organization_name`: `string`;
  `schema`: `string`;
  `status`: `string`;
  `tenantId`: `string`;
  `updatedAt`: `Date`;
 \}\>

恢复后的租户信息，如果租户不存在则返回null

#### Example

```ts
const restoredTenant = await tenantService.restore('123e4567-e89b-12d3-a456-426614174000');
```

***

### update()

```ts
update(id, data): Promise<{
  category: string;
  connection_string: string;
  createdAt: Date;
  database: string;
  deletedAt: Date;
  description: string;
  id: string;
  name: string;
  organization_code: string;
  organization_name: string;
  schema: string;
  status: string;
  tenantId: string;
  updatedAt: Date;
}>
```

更新租户信息

#### Parameters

##### id

`string`

租户ID

##### data

`Partial`\<\{
  `database`: `string`;
  `name`: `string`;
  `schema`: `string`;
  `tenantId`: `string`;
 \}\>

需要更新的租户数据

#### Returns

`Promise`\<\{
  `category`: `string`;
  `connection_string`: `string`;
  `createdAt`: `Date`;
  `database`: `string`;
  `deletedAt`: `Date`;
  `description`: `string`;
  `id`: `string`;
  `name`: `string`;
  `organization_code`: `string`;
  `organization_name`: `string`;
  `schema`: `string`;
  `status`: `string`;
  `tenantId`: `string`;
  `updatedAt`: `Date`;
 \}\>

更新后的租户信息，如果租户不存在则返回null

#### Example

```ts
const updatedTenant = await tenantService.update('123e4567-e89b-12d3-a456-426614174000', {
  name: '更新后的租户名称'
});
```
