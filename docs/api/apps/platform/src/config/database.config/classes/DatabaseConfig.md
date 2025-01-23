[AIOFC API 文档](../../../../../../index.md) / [apps/platform/src/config/database.config](../index.md) / DatabaseConfig

# Class: DatabaseConfig

Defined in: [apps/platform/src/config/database.config.ts:18](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/config/database.config.ts#L18)

EnvService 类

这是一个工具类，负责把经过验证的环境变量（EnvValidatedConfig）分解为若干个配置组，
这些配置组被暴露为属性，供应用程序使用。

职责：
1. 管理应用程序的配置
2. 通过依赖注入提供配置数据
3. 提供类型安全的配置访问接口

## Extends

- [`ZodEnv`](../../../../../../packages/zod-env/src/lib/zod-env/classes/ZodEnv.md)\<[`DatabaseValidatedConfig`](../../database-z-schema/type-aliases/DatabaseValidatedConfig.md)\>

## Constructors

### new DatabaseConfig()

> **new DatabaseConfig**(): [`DatabaseConfig`](DatabaseConfig.md)

Defined in: [apps/platform/src/config/database.config.ts:19](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/config/database.config.ts#L19)

#### Returns

[`DatabaseConfig`](DatabaseConfig.md)

#### Overrides

[`ZodEnv`](../../../../../../packages/zod-env/src/lib/zod-env/classes/ZodEnv.md).[`constructor`](../../../../../../packages/zod-env/src/lib/zod-env/classes/ZodEnv.md#constructors)

## Accessors

### config

#### Get Signature

> **get** **config**(): `T`

Defined in: [packages/zod-env/src/lib/zod-env.ts:73](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/zod-env/src/lib/zod-env.ts#L73)

获取验证后的配置对象

##### Returns

`T`

类型安全的配置对象

#### Inherited from

[`ZodEnv`](../../../../../../packages/zod-env/src/lib/zod-env/classes/ZodEnv.md).[`config`](../../../../../../packages/zod-env/src/lib/zod-env/classes/ZodEnv.md#config)

***

### database

#### Get Signature

> **get** **database**(): `Readonly`\<\{ `host`: `string`; `isolationStrategy`: `"schema"` \| `"row"`; `name`: `string`; `password`: `string`; `pool`: \{ `connect_timeout`: `number`; `idle_timeout`: `number`; `max`: `number`; `max_lifetime`: `number`; `min`: `number`; \}; `port`: `number`; `systemSchema`: `string`; `user`: `string`; \}\>

Defined in: [apps/platform/src/config/database.config.ts:27](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/config/database.config.ts#L27)

##### Returns

`Readonly`\<\{ `host`: `string`; `isolationStrategy`: `"schema"` \| `"row"`; `name`: `string`; `password`: `string`; `pool`: \{ `connect_timeout`: `number`; `idle_timeout`: `number`; `max`: `number`; `max_lifetime`: `number`; `min`: `number`; \}; `port`: `number`; `systemSchema`: `string`; `user`: `string`; \}\>
