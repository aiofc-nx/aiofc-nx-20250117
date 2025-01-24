[@aiofc-nx-2025/source](../../../../../../../index.md) / [apps/platform/src/modules/users/users.controller](../index.md) / UsersController

# Class: UsersController

## Constructors

### new UsersController()

```ts
new UsersController(usersService): UsersController
```

#### Parameters

##### usersService

[`UsersService`](../../users.service/classes/UsersService.md)

#### Returns

[`UsersController`](UsersController.md)

## Properties

### usersService

```ts
private readonly usersService: UsersService;
```

## Methods

### changePassword()

```ts
changePassword(
   id, 
   oldPassword, 
newPassword): Promise<void>
```

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

```ts
checkUsername(username, excludeId?): Promise<boolean>
```

#### Parameters

##### username

`string`

##### excludeId?

`string`

#### Returns

`Promise`\<`boolean`\>

***

### create()

```ts
create(data): Promise<any>
```

#### Parameters

##### data

[`CreateUserDto`](../../dto/user.dto/classes/CreateUserDto.md)

#### Returns

`Promise`\<`any`\>

***

### delete()

```ts
delete(id): Promise<any>
```

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

#### Parameters

##### ids

`string`[]

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
findMany(
   page?, 
   pageSize?, 
   username?): Promise<{
  items: any;
  page: number;
  pageSize: number;
  total: number;
}>
```

#### Parameters

##### page?

`number`

##### pageSize?

`number`

##### username?

`string`

#### Returns

`Promise`\<\{
  `items`: `any`;
  `page`: `number`;
  `pageSize`: `number`;
  `total`: `number`;
 \}\>

***

### update()

```ts
update(id, data): Promise<any>
```

#### Parameters

##### id

`string`

##### data

`Partial`\<[`CreateUserDto`](../../dto/user.dto/classes/CreateUserDto.md)\>

#### Returns

`Promise`\<`any`\>
