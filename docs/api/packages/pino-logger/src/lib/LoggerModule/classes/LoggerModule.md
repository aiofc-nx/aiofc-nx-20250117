[@aiofc-nx-2025/source](../../../../../../index.md) / [packages/pino-logger/src/lib/LoggerModule](../index.md) / LoggerModule

# Class: LoggerModule

As NestJS@11 still supports express@4 `*`-style routing by itself let's keep
it for the backward compatibility. On the next major NestJS release `*` we
can replace it with `/{*splat}`, and drop the support for NestJS@9 and below.

## Constructors

### new LoggerModule()

```ts
new LoggerModule(params): LoggerModule
```

#### Parameters

##### params

[`Params`](../../params/interfaces/Params.md)

#### Returns

[`LoggerModule`](LoggerModule.md)

## Properties

### params

```ts
private readonly params: Params;
```

## Methods

### forRoot()

```ts
static forRoot(params?): DynamicModule
```

#### Parameters

##### params?

[`Params`](../../params/interfaces/Params.md) & `Partial`\<[`LoggerConfig`](../../interfaces/logger.config/interfaces/LoggerConfig.md)\>

#### Returns

`DynamicModule`

***

### forRootAsync()

```ts
static forRootAsync(params): DynamicModule
```

#### Parameters

##### params

[`LoggerModuleAsyncParams`](../../params/interfaces/LoggerModuleAsyncParams.md) & `object`

#### Returns

`DynamicModule`
