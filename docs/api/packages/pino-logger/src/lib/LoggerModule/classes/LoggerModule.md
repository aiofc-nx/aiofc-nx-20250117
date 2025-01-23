[AIOFC API 文档](../../../../../../index.md) / [packages/pino-logger/src/lib/LoggerModule](../index.md) / LoggerModule

# Class: LoggerModule

Defined in: [packages/pino-logger/src/lib/LoggerModule.ts:24](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/LoggerModule.ts#L24)

As NestJS@11 still supports express@4 `*`-style routing by itself let's keep
it for the backward compatibility. On the next major NestJS release `*` we
can replace it with `/{*splat}`, and drop the support for NestJS@9 and below.

## Constructors

### new LoggerModule()

> **new LoggerModule**(`params`): [`LoggerModule`](LoggerModule.md)

Defined in: [packages/pino-logger/src/lib/LoggerModule.ts:98](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/LoggerModule.ts#L98)

#### Parameters

##### params

[`Params`](../../params/interfaces/Params.md)

#### Returns

[`LoggerModule`](LoggerModule.md)

## Properties

### params

> `private` `readonly` **params**: [`Params`](../../params/interfaces/Params.md)

Defined in: [packages/pino-logger/src/lib/LoggerModule.ts:98](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/LoggerModule.ts#L98)

## Methods

### forRoot()

> `static` **forRoot**(`params`?): `DynamicModule`

Defined in: [packages/pino-logger/src/lib/LoggerModule.ts:25](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/LoggerModule.ts#L25)

#### Parameters

##### params?

[`Params`](../../params/interfaces/Params.md) & `Partial`\<[`LoggerConfig`](../../interfaces/logger.config/interfaces/LoggerConfig.md)\>

#### Returns

`DynamicModule`

***

### forRootAsync()

> `static` **forRootAsync**(`params`): `DynamicModule`

Defined in: [packages/pino-logger/src/lib/LoggerModule.ts:53](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/LoggerModule.ts#L53)

#### Parameters

##### params

[`LoggerModuleAsyncParams`](../../params/interfaces/LoggerModuleAsyncParams.md) & `object`

#### Returns

`DynamicModule`
