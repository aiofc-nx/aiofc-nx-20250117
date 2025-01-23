[AIOFC API 文档](../../../../../../../index.md) / [apps/platform/src/modules/users/users.service](../index.md) / UsersService

# Class: UsersService

Defined in: [apps/platform/src/modules/users/users.service.ts:16](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/users/users.service.ts#L16)

## Constructors

### new UsersService()

> **new UsersService**(`db`, `tenantContext`): [`UsersService`](UsersService.md)

Defined in: [apps/platform/src/modules/users/users.service.ts:17](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/users/users.service.ts#L17)

#### Parameters

##### db

[`DatabaseService`](../../../../database/services/database.service/classes/DatabaseService.md)

##### tenantContext

[`TenantContextService`](../../../../database/services/tenant-context.service/classes/TenantContextService.md)

#### Returns

[`UsersService`](UsersService.md)

## Properties

### db

> `private` `readonly` **db**: [`DatabaseService`](../../../../database/services/database.service/classes/DatabaseService.md)

Defined in: [apps/platform/src/modules/users/users.service.ts:18](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/users/users.service.ts#L18)

***

### tenantContext

> `protected` `readonly` **tenantContext**: [`TenantContextService`](../../../../database/services/tenant-context.service/classes/TenantContextService.md)

Defined in: [apps/platform/src/modules/users/users.service.ts:19](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/users/users.service.ts#L19)

## Methods

### changePassword()

> **changePassword**(`id`, `oldPassword`, `newPassword`): `Promise`\<`void`\>

Defined in: [apps/platform/src/modules/users/users.service.ts:114](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/users/users.service.ts#L114)

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

> **create**(`data`, `hashPassword`): `Promise`\<`any`\>

Defined in: [apps/platform/src/modules/users/users.service.ts:25](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/users/users.service.ts#L25)

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

> **delete**(`id`): `Promise`\<`any`\>

Defined in: [apps/platform/src/modules/users/users.service.ts:140](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/users/users.service.ts#L140)

删除用户

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`any`\>

***

### deleteMany()

> **deleteMany**(`ids`): `Promise`\<`any`\>

Defined in: [apps/platform/src/modules/users/users.service.ts:178](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/users/users.service.ts#L178)

批量删除用户

#### Parameters

##### ids

`string`[]

用户ID数组

#### Returns

`Promise`\<`any`\>

***

### findById()

> **findById**(`id`): `Promise`\<`any`\>

Defined in: [apps/platform/src/modules/users/users.service.ts:58](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/users/users.service.ts#L58)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`any`\>

***

### findMany()

> **findMany**(`params`): `Promise`\<\{ `items`: `any`; `page`: `number`; `pageSize`: `number`; `total`: `number`; \}\>

Defined in: [apps/platform/src/modules/users/users.service.ts:71](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/users/users.service.ts#L71)

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

`Promise`\<\{ `items`: `any`; `page`: `number`; `pageSize`: `number`; `total`: `number`; \}\>

***

### isUsernameExist()

> **isUsernameExist**(`username`, `excludeId`?): `Promise`\<`boolean`\>

Defined in: [apps/platform/src/modules/users/users.service.ts:192](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/users/users.service.ts#L192)

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

> **update**(`id`, `data`): `Promise`\<`any`\>

Defined in: [apps/platform/src/modules/users/users.service.ts:101](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/users/users.service.ts#L101)

更新用户信息

#### Parameters

##### id

`string`

##### data

`Partial`\<`Omit`\<\{ `avatar`: `string`; `createdAt`: `Date`; `deletedAt`: `Date`; `department_id`: `string`; `display_name`: `string`; `email`: `string`; `id`: `string`; `last_login_at`: `Date`; `last_login_ip`: `string`; `password`: `string`; `phone`: `string`; `position`: `string`; `remarks`: `string`; `status`: `string`; `tenantId`: `string`; `updatedAt`: `Date`; `username`: `string`; \}, `"password"` \| `"id"`\>\>

#### Returns

`Promise`\<`any`\>

***

### validateUser()

> **validateUser**(`username`, `password`): `Promise`\<`any`\>

Defined in: [apps/platform/src/modules/users/users.service.ts:154](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/users/users.service.ts#L154)

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
