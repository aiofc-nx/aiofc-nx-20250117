[@aiofc-nx-2025/source](../../../../../../../index.md) / [apps/platform/src/modules/users/users.service](../index.md) / UsersService

# Class: UsersService

## Constructors

### new UsersService()

```ts
new UsersService(db, tenantContext): UsersService
```

#### Parameters

##### db

[`DatabaseService`](../../../../database/services/database.service/classes/DatabaseService.md)

##### tenantContext

[`TenantContextService`](../../../../database/services/tenant-context.service/classes/TenantContextService.md)

#### Returns

[`UsersService`](UsersService.md)

## Properties

### db

```ts
private readonly db: DatabaseService;
```

***

### tenantContext

```ts
protected readonly tenantContext: TenantContextService;
```

## Methods

### changePassword()

```ts
changePassword(
   id, 
   oldPassword, 
newPassword): Promise<void>
```

修改密码

#### Parameters

##### id

`string`

##### oldPassword

`string`

##### newPassword

`string`

#### Returns

`Promise`\<`void`\>

***

### create()

```ts
create(data, hashPassword): Promise<any>
```

创建新用户

#### Parameters

##### data

[`CreateUserDto`](../../dto/user.dto/classes/CreateUserDto.md)

##### hashPassword

`boolean` = `true`

#### Returns

`Promise`\<`any`\>

***

### delete()

```ts
delete(id): Promise<any>
```

删除用户

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`any`\>

***

### deleteMany()

```ts
deleteMany(ids): Promise<any>
```

批量删除用户

#### Parameters

##### ids

`string`[]

用户ID数组

#### Returns

`Promise`\<`any`\>

***

### findById()

```ts
findById(id): Promise<any>
```

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`any`\>

***

### findMany()

```ts
findMany(params): Promise<{
  items: any;
  page: number;
  pageSize: number;
  total: number;
}>
```

查询用户列表

#### Parameters

##### params

查询参数（分页、筛选条件等）

###### page

`number`

###### pageSize

`number`

###### username

`string`

#### Returns

`Promise`\<\{
  `items`: `any`;
  `page`: `number`;
  `pageSize`: `number`;
  `total`: `number`;
 \}\>

***

### isUsernameExist()

```ts
isUsernameExist(username, excludeId?): Promise<boolean>
```

检查用户名是否已存在

#### Parameters

##### username

`string`

用户名

##### excludeId?

`string`

排除的用户ID（用于更新时检查）

#### Returns

`Promise`\<`boolean`\>

***

### update()

```ts
update(id, data): Promise<any>
```

更新用户信息

#### Parameters

##### id

`string`

##### data

`Partial`\<`Omit`\<\{
  `avatar`: `string`;
  `createdAt`: `Date`;
  `deletedAt`: `Date`;
  `department_id`: `string`;
  `display_name`: `string`;
  `email`: `string`;
  `id`: `string`;
  `last_login_at`: `Date`;
  `last_login_ip`: `string`;
  `password`: `string`;
  `phone`: `string`;
  `position`: `string`;
  `remarks`: `string`;
  `status`: `string`;
  `tenantId`: `string`;
  `updatedAt`: `Date`;
  `username`: `string`;
 \}, `"password"` \| `"id"`\>\>

#### Returns

`Promise`\<`any`\>

***

### validateUser()

```ts
validateUser(username, password): Promise<any>
```

验证用户凭据

#### Parameters

##### username

`string`

用户名

##### password

`string`

密码

#### Returns

`Promise`\<`any`\>
