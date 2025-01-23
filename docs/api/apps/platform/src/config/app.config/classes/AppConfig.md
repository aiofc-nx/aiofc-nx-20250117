[AIOFC API 文档](../../../../../../index.md) / [apps/platform/src/config/app.config](../index.md) / AppConfig

# Class: AppConfig

Defined in: [apps/platform/src/config/app.config.ts:18](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/config/app.config.ts#L18)

EnvService 类

这是一个工具类，负责把经过验证的环境变量（EnvValidatedConfig）分解为若干个配置组，
这些配置组被暴露为属性，供应用程序使用。

职责：
1. 管理应用程序的配置
2. 通过依赖注入提供配置数据
3. 提供类型安全的配置访问接口

## Extends

- [`ZodEnv`](../../../../../../packages/zod-env/src/lib/zod-env/classes/ZodEnv.md)\<[`AppValidatedConfig`](../../app-z-schema/type-aliases/AppValidatedConfig.md)\>

## Constructors

### new AppConfig()

> **new AppConfig**(): [`AppConfig`](AppConfig.md)

Defined in: [apps/platform/src/config/app.config.ts:19](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/config/app.config.ts#L19)

#### Returns

[`AppConfig`](AppConfig.md)

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

### logger

#### Get Signature

> **get** **logger**(): `Readonly`\<\{ `trackingIdHeader`: `string`; \}\>

Defined in: [apps/platform/src/config/app.config.ts:30](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/config/app.config.ts#L30)

##### Returns

`Readonly`\<\{ `trackingIdHeader`: `string`; \}\>

***

### server

#### Get Signature

> **get** **server**(): `Readonly`\<\{ `globalPrefix`: `string`; `port`: `number`; \}\>

Defined in: [apps/platform/src/config/app.config.ts:26](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/config/app.config.ts#L26)

##### Returns

`Readonly`\<\{ `globalPrefix`: `string`; `port`: `number`; \}\>
