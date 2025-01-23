[AIOFC API 文档](../../../../../../../index.md) / [packages/pino-logger/src/lib/interfaces/logger.config](../index.md) / LoggerConfig

# Interface: LoggerConfig

Defined in: [packages/pino-logger/src/lib/interfaces/logger.config.ts:4](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/interfaces/logger.config.ts#L4)

日志拦截器配置接口

## Properties

### ignorePaths?

> `optional` **ignorePaths**: (`string` \| `RegExp`)[]

Defined in: [packages/pino-logger/src/lib/interfaces/logger.config.ts:8](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/interfaces/logger.config.ts#L8)

不需要记录日志的路径

***

### logRequestBody

> **logRequestBody**: `boolean`

Defined in: [packages/pino-logger/src/lib/interfaces/logger.config.ts:23](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/interfaces/logger.config.ts#L23)

是否记录请求体

***

### logResponseBody

> **logResponseBody**: `boolean`

Defined in: [packages/pino-logger/src/lib/interfaces/logger.config.ts:28](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/interfaces/logger.config.ts#L28)

是否记录响应体

***

### sensitiveFields

> **sensitiveFields**: `string`[]

Defined in: [packages/pino-logger/src/lib/interfaces/logger.config.ts:18](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/interfaces/logger.config.ts#L18)

需要脱敏的字段

***

### sensitiveHeaders

> **sensitiveHeaders**: `string`[]

Defined in: [packages/pino-logger/src/lib/interfaces/logger.config.ts:13](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/interfaces/logger.config.ts#L13)

需要脱敏的请求头

***

### trace?

> `optional` **trace**: `object`

Defined in: [packages/pino-logger/src/lib/interfaces/logger.config.ts:30](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/interfaces/logger.config.ts#L30)

#### cache?

> `optional` **cache**: `object`

缓存追踪配置

##### cache.enabled

> **enabled**: `boolean`

是否启用缓存追踪

##### cache.logKeys

> **logKeys**: `boolean`

是否记录缓存键

##### cache.logValues

> **logValues**: `boolean`

是否记录缓存值

#### callStack?

> `optional` **callStack**: `boolean`

是否记录调用链路

#### enabled

> **enabled**: `boolean`

#### parentIdHeader

> **parentIdHeader**: `string`

#### resources?

> `optional` **resources**: `boolean`

是否记录系统资源使用

#### sampleRate?

> `optional` **sampleRate**: `number`

采样率 (0-1)

#### timing?

> `optional` **timing**: `boolean`

是否记录请求耗时分布

#### traceIdHeader

> **traceIdHeader**: `string`

***

### transport?

> `optional` **transport**: `object`

Defined in: [packages/pino-logger/src/lib/interfaces/logger.config.ts:69](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/interfaces/logger.config.ts#L69)

#### options

> **options**: `object`

##### options.colorize

> **colorize**: `boolean`

##### options.ignore

> **ignore**: `string`

##### options.levelFirst

> **levelFirst**: `boolean`

##### options.messageFormat

> **messageFormat**: `string`

##### options.messageKey

> **messageKey**: `string`

##### options.minimumLevel

> **minimumLevel**: `string`

##### options.singleLine

> **singleLine**: `boolean`

##### options.sync

> **sync**: `boolean`

##### options.translateTime

> **translateTime**: `string`

#### target

> **target**: `string`
