[AIOFC API 文档](../../../../../../index.md) / [packages/pino-logger/src/lib/params](../index.md) / LoggerModuleAsyncParams

# Interface: LoggerModuleAsyncParams

Defined in: [packages/pino-logger/src/lib/params.ts:69](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/params.ts#L69)

## Extends

- `Pick`\<`ModuleMetadata`, `"imports"` \| `"providers"`\>

## Properties

### inject?

> `optional` **inject**: `any`[]

Defined in: [packages/pino-logger/src/lib/params.ts:72](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/params.ts#L72)

***

### useFactory()

> **useFactory**: (...`args`) => [`Params`](Params.md) \| `Promise`\<[`Params`](Params.md)\>

Defined in: [packages/pino-logger/src/lib/params.ts:71](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/params.ts#L71)

#### Parameters

##### args

...`any`[]

#### Returns

[`Params`](Params.md) \| `Promise`\<[`Params`](Params.md)\>
