[@aiofc-nx-2025/source](../../../../../../../index.md) / [apps/platform/src/modules/tenant/tenant.controller](../index.md) / TenantController

# Class: TenantController

## Constructors

### new TenantController()

```ts
new TenantController(tenantService): TenantController
```

#### Parameters

##### tenantService

[`TenantService`](../../tenant.service/classes/TenantService.md)

#### Returns

[`TenantController`](TenantController.md)

## Properties

### tenantService

```ts
private tenantService: TenantService;
```

## Methods

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

***

### delete()

```ts
delete(id): Promise<boolean>
```

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`boolean`\>

***

### findAll()

```ts
findAll(): Promise<object[]>
```

#### Returns

`Promise`\<`object`[]\>

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

#### Parameters

##### id

`string`

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
