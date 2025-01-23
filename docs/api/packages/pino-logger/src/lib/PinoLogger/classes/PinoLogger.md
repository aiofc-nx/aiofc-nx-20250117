[AIOFC API 文档](../../../../../../index.md) / [packages/pino-logger/src/lib/PinoLogger](../index.md) / PinoLogger

# Class: PinoLogger

Defined in: [packages/pino-logger/src/lib/PinoLogger.ts:39](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/PinoLogger.ts#L39)

## Implements

- `PinoMethods`

## Constructors

### new PinoLogger()

> **new PinoLogger**(`__namedParameters`, `cls`): [`PinoLogger`](PinoLogger.md)

Defined in: [packages/pino-logger/src/lib/PinoLogger.ts:51](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/PinoLogger.ts#L51)

#### Parameters

##### \_\_namedParameters

[`Params`](../../params/interfaces/Params.md)

##### cls

`ClsService`

#### Returns

[`PinoLogger`](PinoLogger.md)

## Properties

### cls

> `private` `readonly` **cls**: `ClsService`

Defined in: [packages/pino-logger/src/lib/PinoLogger.ts:53](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/PinoLogger.ts#L53)

***

### context

> `protected` **context**: `string` = `''`

Defined in: [packages/pino-logger/src/lib/PinoLogger.ts:47](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/PinoLogger.ts#L47)

***

### contextName

> `protected` `readonly` **contextName**: `string`

Defined in: [packages/pino-logger/src/lib/PinoLogger.ts:48](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/PinoLogger.ts#L48)

***

### errorKey

> `protected` `readonly` **errorKey**: `string` = `'err'`

Defined in: [packages/pino-logger/src/lib/PinoLogger.ts:49](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/PinoLogger.ts#L49)

***

### root

> `readonly` `static` **root**: `Logger`\<`never`, `boolean`\>

Defined in: [packages/pino-logger/src/lib/PinoLogger.ts:45](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/PinoLogger.ts#L45)

root is the most root logger that can be used to change params at runtime.
Accessible only when `useExisting` is not set to `true` in `Params`.
Readonly, but you can change it's properties.

## Accessors

### logger

#### Get Signature

> **get** **logger**(): `Logger`\<`never`, `boolean`\>

Defined in: [packages/pino-logger/src/lib/PinoLogger.ts:82](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/PinoLogger.ts#L82)

##### Returns

`Logger`\<`never`, `boolean`\>

## Methods

### assign()

> **assign**(`fields`): `void`

Defined in: [packages/pino-logger/src/lib/PinoLogger.ts:126](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/PinoLogger.ts#L126)

#### Parameters

##### fields

`Bindings`

#### Returns

`void`

***

### call()

> `protected` **call**(`method`, ...`args`): `void`

Defined in: [packages/pino-logger/src/lib/PinoLogger.ts:140](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/PinoLogger.ts#L140)

#### Parameters

##### method

`Level`

##### args

\[`string`, `...args: any[]`\] | \[`object`, `string`, `...args: any[]`\]

#### Returns

`void`

***

### debug()

#### Call Signature

> **debug**(`msg`, ...`args`): `void`

Defined in: [packages/pino-logger/src/lib/PinoLogger.ts:92](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/PinoLogger.ts#L92)

Log at `'debug'` level the given msg. If the first argument is an object, all its properties will be included in the JSON line.
If more args follows `msg`, these will be used to format `msg` using `util.format`.

##### Parameters

###### msg

`string`

###### args

...`any`[]

##### Returns

`void`

##### Implementation of

`PinoMethods.debug`

#### Call Signature

> **debug**(`obj`, `msg`?, ...`args`?): `void`

Defined in: [packages/pino-logger/src/lib/PinoLogger.ts:93](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/PinoLogger.ts#L93)

##### Parameters

###### obj

`unknown`

###### msg?

`string`

###### args?

...`any`[]

##### Returns

`void`

##### Implementation of

`PinoMethods.debug`

***

### error()

#### Call Signature

> **error**(`msg`, ...`args`): `void`

Defined in: [packages/pino-logger/src/lib/PinoLogger.ts:110](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/PinoLogger.ts#L110)

Log at `'error'` level the given msg. If the first argument is an object, all its properties will be included in the JSON line.
If more args follows `msg`, these will be used to format `msg` using `util.format`.

##### Parameters

###### msg

`string`

###### args

...`any`[]

##### Returns

`void`

##### Implementation of

`PinoMethods.error`

#### Call Signature

> **error**(`obj`, `msg`?, ...`args`?): `void`

Defined in: [packages/pino-logger/src/lib/PinoLogger.ts:111](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/PinoLogger.ts#L111)

##### Parameters

###### obj

`unknown`

###### msg?

`string`

###### args?

...`any`[]

##### Returns

`void`

##### Implementation of

`PinoMethods.error`

***

### fatal()

#### Call Signature

> **fatal**(`msg`, ...`args`): `void`

Defined in: [packages/pino-logger/src/lib/PinoLogger.ts:116](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/PinoLogger.ts#L116)

Log at `'fatal'` level the given msg. If the first argument is an object, all its properties will be included in the JSON line.
If more args follows `msg`, these will be used to format `msg` using `util.format`.

##### Parameters

###### msg

`string`

###### args

...`any`[]

##### Returns

`void`

##### Implementation of

`PinoMethods.fatal`

#### Call Signature

> **fatal**(`obj`, `msg`?, ...`args`?): `void`

Defined in: [packages/pino-logger/src/lib/PinoLogger.ts:117](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/PinoLogger.ts#L117)

##### Parameters

###### obj

`unknown`

###### msg?

`string`

###### args?

...`any`[]

##### Returns

`void`

##### Implementation of

`PinoMethods.fatal`

***

### info()

#### Call Signature

> **info**(`msg`, ...`args`): `void`

Defined in: [packages/pino-logger/src/lib/PinoLogger.ts:98](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/PinoLogger.ts#L98)

Log at `'info'` level the given msg. If the first argument is an object, all its properties will be included in the JSON line.
If more args follows `msg`, these will be used to format `msg` using `util.format`.

##### Parameters

###### msg

`string`

###### args

...`any`[]

##### Returns

`void`

##### Implementation of

`PinoMethods.info`

#### Call Signature

> **info**(`obj`, `msg`?, ...`args`?): `void`

Defined in: [packages/pino-logger/src/lib/PinoLogger.ts:99](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/PinoLogger.ts#L99)

##### Parameters

###### obj

`unknown`

###### msg?

`string`

###### args?

...`any`[]

##### Returns

`void`

##### Implementation of

`PinoMethods.info`

***

### setContext()

> **setContext**(`value`): `void`

Defined in: [packages/pino-logger/src/lib/PinoLogger.ts:122](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/PinoLogger.ts#L122)

#### Parameters

##### value

`string`

#### Returns

`void`

***

### trace()

#### Call Signature

> **trace**(`msg`, ...`args`): `void`

Defined in: [packages/pino-logger/src/lib/PinoLogger.ts:86](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/PinoLogger.ts#L86)

Log at `'trace'` level the given msg. If the first argument is an object, all its properties will be included in the JSON line.
If more args follows `msg`, these will be used to format `msg` using `util.format`.

##### Parameters

###### msg

`string`

###### args

...`any`[]

##### Returns

`void`

##### Implementation of

`PinoMethods.trace`

#### Call Signature

> **trace**(`obj`, `msg`?, ...`args`?): `void`

Defined in: [packages/pino-logger/src/lib/PinoLogger.ts:87](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/PinoLogger.ts#L87)

##### Parameters

###### obj

`unknown`

###### msg?

`string`

###### args?

...`any`[]

##### Returns

`void`

##### Implementation of

`PinoMethods.trace`

***

### warn()

#### Call Signature

> **warn**(`msg`, ...`args`): `void`

Defined in: [packages/pino-logger/src/lib/PinoLogger.ts:104](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/PinoLogger.ts#L104)

Log at `'warn'` level the given msg. If the first argument is an object, all its properties will be included in the JSON line.
If more args follows `msg`, these will be used to format `msg` using `util.format`.

##### Parameters

###### msg

`string`

###### args

...`any`[]

##### Returns

`void`

##### Implementation of

`PinoMethods.warn`

#### Call Signature

> **warn**(`obj`, `msg`?, ...`args`?): `void`

Defined in: [packages/pino-logger/src/lib/PinoLogger.ts:105](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/PinoLogger.ts#L105)

##### Parameters

###### obj

`unknown`

###### msg?

`string`

###### args?

...`any`[]

##### Returns

`void`

##### Implementation of

`PinoMethods.warn`
