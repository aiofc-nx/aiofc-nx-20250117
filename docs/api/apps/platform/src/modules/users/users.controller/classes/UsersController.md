[AIOFC API 文档](../../../../../../../index.md) / [apps/platform/src/modules/users/users.controller](../index.md) / UsersController

# Class: UsersController

Defined in: [apps/platform/src/modules/users/users.controller.ts:18](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/users/users.controller.ts#L18)

## Constructors

### new UsersController()

> **new UsersController**(`usersService`): [`UsersController`](UsersController.md)

Defined in: [apps/platform/src/modules/users/users.controller.ts:19](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/users/users.controller.ts#L19)

#### Parameters

##### usersService

[`UsersService`](../../users.service/classes/UsersService.md)

#### Returns

[`UsersController`](UsersController.md)

## Properties

### usersService

> `private` `readonly` **usersService**: [`UsersService`](../../users.service/classes/UsersService.md)

Defined in: [apps/platform/src/modules/users/users.controller.ts:19](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/users/users.controller.ts#L19)

## Methods

### changePassword()

> **changePassword**(`id`, `oldPassword`, `newPassword`): `Promise`\<`void`\>

Defined in: [apps/platform/src/modules/users/users.controller.ts:51](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/users/users.controller.ts#L51)

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

### checkUsername()

> **checkUsername**(`username`, `excludeId`?): `Promise`\<`boolean`\>

Defined in: [apps/platform/src/modules/users/users.controller.ts:73](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/users/users.controller.ts#L73)

#### Parameters

##### username

`string`

##### excludeId?

`string`

#### Returns

`Promise`\<`boolean`\>

***

### create()

> **create**(`data`): `Promise`\<`any`\>

Defined in: [apps/platform/src/modules/users/users.controller.ts:23](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/users/users.controller.ts#L23)

#### Parameters

##### data

[`CreateUserDto`](../../dto/user.dto/classes/CreateUserDto.md)

#### Returns

`Promise`\<`any`\>

***

### delete()

> **delete**(`id`): `Promise`\<`any`\>

Defined in: [apps/platform/src/modules/users/users.controller.ts:61](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/users/users.controller.ts#L61)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`any`\>

***

### deleteMany()

> **deleteMany**(`ids`): `Promise`\<`any`\>

Defined in: [apps/platform/src/modules/users/users.controller.ts:67](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/users/users.controller.ts#L67)

#### Parameters

##### ids

`string`[]

#### Returns

`Promise`\<`any`\>

***

### findById()

> **findById**(`id`): `Promise`\<`any`\>

Defined in: [apps/platform/src/modules/users/users.controller.ts:39](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/users/users.controller.ts#L39)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`any`\>

***

### findMany()

> **findMany**(`page`?, `pageSize`?, `username`?): `Promise`\<\{ `items`: `any`; `page`: `number`; `pageSize`: `number`; `total`: `number`; \}\>

Defined in: [apps/platform/src/modules/users/users.controller.ts:29](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/users/users.controller.ts#L29)

#### Parameters

##### page?

`number`

##### pageSize?

`number`

##### username?

`string`

#### Returns

`Promise`\<\{ `items`: `any`; `page`: `number`; `pageSize`: `number`; `total`: `number`; \}\>

***

### update()

> **update**(`id`, `data`): `Promise`\<`any`\>

Defined in: [apps/platform/src/modules/users/users.controller.ts:45](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/modules/users/users.controller.ts#L45)

#### Parameters

##### id

`string`

##### data

`Partial`\<[`CreateUserDto`](../../dto/user.dto/classes/CreateUserDto.md)\>

#### Returns

`Promise`\<`any`\>
