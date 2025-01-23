[AIOFC API 文档](../../../../../../index.md) / [packages/pino-logger/src/lib/unified.logging.interceptor](../index.md) / UnifiedLoggingInterceptor

# Class: UnifiedLoggingInterceptor

Defined in: [packages/pino-logger/src/lib/unified.logging.interceptor.ts:99](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/unified.logging.interceptor.ts#L99)

## Implements

- `NestInterceptor`

## Constructors

### new UnifiedLoggingInterceptor()

> **new UnifiedLoggingInterceptor**(`cls`, `logger`, `config`?): [`UnifiedLoggingInterceptor`](UnifiedLoggingInterceptor.md)

Defined in: [packages/pino-logger/src/lib/unified.logging.interceptor.ts:102](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/unified.logging.interceptor.ts#L102)

#### Parameters

##### cls

`ClsService`

##### logger

[`PinoLogger`](../../PinoLogger/classes/PinoLogger.md)

##### config?

`Partial`\<[`LoggerConfig`](../../interfaces/logger.config/interfaces/LoggerConfig.md)\>

#### Returns

[`UnifiedLoggingInterceptor`](UnifiedLoggingInterceptor.md)

## Properties

### cls

> `private` `readonly` **cls**: `ClsService`

Defined in: [packages/pino-logger/src/lib/unified.logging.interceptor.ts:103](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/unified.logging.interceptor.ts#L103)

***

### config

> `private` `readonly` **config**: [`LoggerConfig`](../../interfaces/logger.config/interfaces/LoggerConfig.md)

Defined in: [packages/pino-logger/src/lib/unified.logging.interceptor.ts:100](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/unified.logging.interceptor.ts#L100)

***

### logger

> `private` `readonly` **logger**: [`PinoLogger`](../../PinoLogger/classes/PinoLogger.md)

Defined in: [packages/pino-logger/src/lib/unified.logging.interceptor.ts:104](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/unified.logging.interceptor.ts#L104)

## Methods

### getErrorCode()

> `private` **getErrorCode**(`error`): `number`

Defined in: [packages/pino-logger/src/lib/unified.logging.interceptor.ts:514](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/unified.logging.interceptor.ts#L514)

获取错误状态码

#### Parameters

##### error

`Error`

#### Returns

`number`

***

### getErrorDetails()

> `private` **getErrorDetails**(`error`): `Record`\<`string`, `any`\>

Defined in: [packages/pino-logger/src/lib/unified.logging.interceptor.ts:524](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/unified.logging.interceptor.ts#L524)

获取错误详情

#### Parameters

##### error

`Error`

#### Returns

`Record`\<`string`, `any`\>

***

### getErrorType()

> `private` **getErrorType**(`error`): `string`

Defined in: [packages/pino-logger/src/lib/unified.logging.interceptor.ts:433](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/unified.logging.interceptor.ts#L433)

获取错误类型

#### Parameters

##### error

`Error`

#### Returns

`string`

***

### getPerformanceMetrics()

> `private` **getPerformanceMetrics**(`startTime`): `Record`\<`string`, `any`\>

Defined in: [packages/pino-logger/src/lib/unified.logging.interceptor.ts:151](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/unified.logging.interceptor.ts#L151)

获取性能指标

#### Parameters

##### startTime

`number`

#### Returns

`Record`\<`string`, `any`\>

***

### getRouteInfo()

> `private` **getRouteInfo**(`request`): `object`

Defined in: [packages/pino-logger/src/lib/unified.logging.interceptor.ts:329](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/unified.logging.interceptor.ts#L329)

获取路由信息

#### Parameters

##### request

`FastifyRequest`\<`IncomingMessage`, `ResolveFastifyRequestType`\<`FastifyTypeProviderDefault`, `FastifySchema`, `RouteGenericInterface`\>\>

#### Returns

`object`

##### params

> **params**: `unknown` = `request.params`

##### query

> **query**: `unknown` = `request.query`

##### routeId

> **routeId**: `string`

***

### getTraceInfo()

> `private` **getTraceInfo**(`request`): `Record`\<`string`, `any`\>

Defined in: [packages/pino-logger/src/lib/unified.logging.interceptor.ts:117](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/unified.logging.interceptor.ts#L117)

获取追踪信息

#### Parameters

##### request

`FastifyRequest`\<`IncomingMessage`, `ResolveFastifyRequestType`\<`FastifyTypeProviderDefault`, `FastifySchema`, `RouteGenericInterface`\>\>

#### Returns

`Record`\<`string`, `any`\>

***

### getUserInfo()

> `private` **getUserInfo**(`request`): `Record`\<`string`, `any`\>

Defined in: [packages/pino-logger/src/lib/unified.logging.interceptor.ts:313](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/unified.logging.interceptor.ts#L313)

获取用户信息

#### Parameters

##### request

`FastifyRequest`\<`IncomingMessage`, `ResolveFastifyRequestType`\<`FastifyTypeProviderDefault`, `FastifySchema`, `RouteGenericInterface`\>\>

#### Returns

`Record`\<`string`, `any`\>

***

### intercept()

> **intercept**(`context`, `next`): `Observable`\<`any`\>

Defined in: [packages/pino-logger/src/lib/unified.logging.interceptor.ts:177](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/unified.logging.interceptor.ts#L177)

Method to implement a custom interceptor.

#### Parameters

##### context

`ExecutionContext`

an `ExecutionContext` object providing methods to access the
route handler and class about to be invoked.

##### next

`CallHandler`

a reference to the `CallHandler`, which provides access to an
`Observable` representing the response stream from the route handler.

#### Returns

`Observable`\<`any`\>

#### Implementation of

`NestInterceptor.intercept`

***

### logCacheOperation()

> `private` **logCacheOperation**(`type`, `key`, `value`?, `duration`?, `success`?): `void`

Defined in: [packages/pino-logger/src/lib/unified.logging.interceptor.ts:589](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/unified.logging.interceptor.ts#L589)

记录缓存操作

#### Parameters

##### type

`"set"` | `"get"` | `"del"`

##### key

`string`

##### value?

`any`

##### duration?

`number`

##### success?

`boolean` = `true`

#### Returns

`void`

***

### logError()

> `private` **logError**(`error`, `request`, `response`, `startTime`, `metrics`?): `void`

Defined in: [packages/pino-logger/src/lib/unified.logging.interceptor.ts:548](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/unified.logging.interceptor.ts#L548)

记录错误信息

#### Parameters

##### error

`Error`

##### request

`FastifyRequest`\<`IncomingMessage`, `ResolveFastifyRequestType`\<`FastifyTypeProviderDefault`, `FastifySchema`, `RouteGenericInterface`\>\>

##### response

`FastifyReply`\<`IncomingMessage`, `ServerResponse`\>

##### startTime

`number`

##### metrics?

`Record`\<`string`, `any`\>

#### Returns

`void`

***

### logRequest()

> `private` **logRequest**(`request`): `void`

Defined in: [packages/pino-logger/src/lib/unified.logging.interceptor.ts:340](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/unified.logging.interceptor.ts#L340)

记录请求信息

#### Parameters

##### request

`FastifyRequest`\<`IncomingMessage`, `ResolveFastifyRequestType`\<`FastifyTypeProviderDefault`, `FastifySchema`, `RouteGenericInterface`\>\>

#### Returns

`void`

***

### logResponse()

> `private` **logResponse**(`request`, `response`, `startTime`, `metrics`?): `void`

Defined in: [packages/pino-logger/src/lib/unified.logging.interceptor.ts:374](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/unified.logging.interceptor.ts#L374)

记录响应信息

#### Parameters

##### request

`FastifyRequest`\<`IncomingMessage`, `ResolveFastifyRequestType`\<`FastifyTypeProviderDefault`, `FastifySchema`, `RouteGenericInterface`\>\>

##### response

`FastifyReply`\<`IncomingMessage`, `ServerResponse`\>

##### startTime

`number`

##### metrics?

`Record`\<`string`, `any`\>

#### Returns

`void`

***

### sanitizeBody()

> `private` **sanitizeBody**(`body`): `any`

Defined in: [packages/pino-logger/src/lib/unified.logging.interceptor.ts:291](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/unified.logging.interceptor.ts#L291)

脱敏请求体

#### Parameters

##### body

`any`

#### Returns

`any`

***

### sanitizeHeaders()

> `private` **sanitizeHeaders**(`headers`): `Record`\<`string`, `any`\>

Defined in: [packages/pino-logger/src/lib/unified.logging.interceptor.ts:276](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/unified.logging.interceptor.ts#L276)

脱敏请求头

#### Parameters

##### headers

`Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

***

### shouldSample()

> `private` **shouldSample**(): `boolean`

Defined in: [packages/pino-logger/src/lib/unified.logging.interceptor.ts:172](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/unified.logging.interceptor.ts#L172)

是否需要采样

#### Returns

`boolean`

***

### shouldSkipLogging()

> `private` **shouldSkipLogging**(`request`): `boolean`

Defined in: [packages/pino-logger/src/lib/unified.logging.interceptor.ts:224](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/unified.logging.interceptor.ts#L224)

判断是否需要跳过日志记录

#### Parameters

##### request

`FastifyRequest`\<`IncomingMessage`, `ResolveFastifyRequestType`\<`FastifyTypeProviderDefault`, `FastifySchema`, `RouteGenericInterface`\>\>

#### Returns

`boolean`
