[AIOFC API 文档](../../../../../../index.md) / [packages/pino-logger/src/lib/logger](../index.md) / Logger

# Class: Logger

Defined in: [packages/pino-logger/src/lib/logger.ts:9](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/logger.ts#L9)

## Implements

- `LoggerService`

## Constructors

### new Logger()

> **new Logger**(`logger`, `__namedParameters`): [`Logger`](Logger.md)

Defined in: [packages/pino-logger/src/lib/logger.ts:12](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/logger.ts#L12)

#### Parameters

##### logger

[`PinoLogger`](../../PinoLogger/classes/PinoLogger.md)

##### \_\_namedParameters

[`Params`](../../params/interfaces/Params.md)

#### Returns

[`Logger`](Logger.md)

## Properties

### contextName

> `private` `readonly` **contextName**: `string`

Defined in: [packages/pino-logger/src/lib/logger.ts:10](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/logger.ts#L10)

***

### logger

> `protected` `readonly` **logger**: [`PinoLogger`](../../PinoLogger/classes/PinoLogger.md)

Defined in: [packages/pino-logger/src/lib/logger.ts:13](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/logger.ts#L13)

## Methods

### call()

> `private` **call**(`level`, `message`, ...`optionalParams`): `void`

Defined in: [packages/pino-logger/src/lib/logger.ts:43](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/logger.ts#L43)

#### Parameters

##### level

`Level`

##### message

`any`

##### optionalParams

...`any`[]

#### Returns

`void`

***

### debug()

> **debug**(`message`, ...`optionalParams`): `void`

Defined in: [packages/pino-logger/src/lib/logger.ts:23](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/logger.ts#L23)

Write a 'debug' level log.

#### Parameters

##### message

`any`

##### optionalParams

...`any`[]

#### Returns

`void`

#### Implementation of

`LoggerService.debug`

***

### error()

> **error**(`message`, ...`optionalParams`): `void`

Defined in: [packages/pino-logger/src/lib/logger.ts:35](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/logger.ts#L35)

Write an 'error' level log.

#### Parameters

##### message

`any`

##### optionalParams

...`any`[]

#### Returns

`void`

#### Implementation of

`LoggerService.error`

***

### fatal()

> **fatal**(`message`, ...`optionalParams`): `void`

Defined in: [packages/pino-logger/src/lib/logger.ts:39](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/logger.ts#L39)

Write a 'fatal' level log.

#### Parameters

##### message

`any`

##### optionalParams

...`any`[]

#### Returns

`void`

#### Implementation of

`LoggerService.fatal`

***

### isWrongExceptionsHandlerContract()

> `private` **isWrongExceptionsHandlerContract**(`level`, `message`, `params`): `params is [string]`

Defined in: [packages/pino-logger/src/lib/logger.ts:88](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/logger.ts#L88)

Unfortunately built-in (not only) `^.*Exception(s?)Handler$` classes call `.error`
method with not supported contract:

- ExceptionsHandler

#### Parameters

##### level

`Level`

##### message

`any`

##### params

`any`[]

#### Returns

`params is [string]`

#### See

 - https://github.com/nestjs/nest/blob/35baf7a077bb972469097c5fea2f184b7babadfc/packages/core/exceptions/base-exception-filter.ts#L60-L63

- ExceptionHandler
 - https://github.com/nestjs/nest/blob/99ee3fd99341bcddfa408d1604050a9571b19bc9/packages/core/errors/exception-handler.ts#L9

- WsExceptionsHandler
 - https://github.com/nestjs/nest/blob/9d0551ff25c5085703bcebfa7ff3b6952869e794/packages/websockets/exceptions/base-ws-exception-filter.ts#L47-L50

- RpcExceptionsHandler
 - https://github.com/nestjs/nest/blob/9d0551ff25c5085703bcebfa7ff3b6952869e794/packages/microservices/exceptions/base-rpc-exception-filter.ts#L26-L30

- all of them
 - https://github.com/search?l=TypeScript&q=org%3Anestjs+logger+error+stack&type=Code

***

### log()

> **log**(`message`, ...`optionalParams`): `void`

Defined in: [packages/pino-logger/src/lib/logger.ts:27](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/logger.ts#L27)

Write a 'log' level log.

#### Parameters

##### message

`any`

##### optionalParams

...`any`[]

#### Returns

`void`

#### Implementation of

`LoggerService.log`

***

### verbose()

> **verbose**(`message`, ...`optionalParams`): `void`

Defined in: [packages/pino-logger/src/lib/logger.ts:19](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/logger.ts#L19)

Write a 'verbose' level log.

#### Parameters

##### message

`any`

##### optionalParams

...`any`[]

#### Returns

`void`

#### Implementation of

`LoggerService.verbose`

***

### warn()

> **warn**(`message`, ...`optionalParams`): `void`

Defined in: [packages/pino-logger/src/lib/logger.ts:31](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/logger.ts#L31)

Write a 'warn' level log.

#### Parameters

##### message

`any`

##### optionalParams

...`any`[]

#### Returns

`void`

#### Implementation of

`LoggerService.warn`
