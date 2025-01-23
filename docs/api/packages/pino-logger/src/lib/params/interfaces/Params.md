[AIOFC API 文档](../../../../../../index.md) / [packages/pino-logger/src/lib/params](../index.md) / Params

# Interface: Params

Defined in: [packages/pino-logger/src/lib/params.ts:10](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/params.ts#L10)

## Properties

### assignResponse?

> `optional` **assignResponse**: `boolean`

Defined in: [packages/pino-logger/src/lib/params.ts:62](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/params.ts#L62)

可选参数，用于在调用期间分配响应记录器
`PinoLogger.分配`。默认情况下，“分配”不会影响响应日志
（例如“请求已完成”）。

***

### exclude?

> `optional` **exclude**: (`string` \| `RouteInfo`)[]

Defined in: [packages/pino-logger/src/lib/params.ts:27](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/params.ts#L27)

路由的可选参数。它应该实现接口
NestJS 内置 `MiddlewareConfigProxy['forRoutes']` 的参数。

#### See

https://docs.nestjs.com/middleware#applying-middleware
它可用于禁用自动 req/res 日志和
从以下日志中删除请求上下文。它适用于所有请求
默认。如果您只需要关闭自动请求/响应
记录某些特定（或所有）路由，但保留应用程序的请求上下文
日志使用 `pinoHttp.autoLogging` 字段。

***

### forRoutes?

> `optional` **forRoutes**: (`string` \| `Type` \| `RouteInfo`)[]

Defined in: [packages/pino-logger/src/lib/params.ts:39](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/params.ts#L39)

路由的可选参数。它应该实现接口
NestJS 内置 `MiddlewareConfigProxy['forRoutes']` 的参数。

#### See

https://docs.nestjs.com/middleware#applying-middleware
它可用于禁用自动 req/res 日志和
从以下日志中删除请求上下文。它适用于所有请求
默认。如果您只需要关闭自动请求/响应
记录某些特定（或所有）路由，但保留应用程序的请求上下文
日志使用 `pinoHttp.autoLogging` 字段。

***

### pinoHttp?

> `optional` **pinoHttp**: `Options` \| `DestinationStream` \| \[`Options`, `DestinationStream`\]

Defined in: [packages/pino-logger/src/lib/params.ts:15](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/params.ts#L15)

`pino-http` 模块的可选参数

#### See

https://github.com/pinojs/pino-http#pinohttpopts-stream

***

### renameContext?

> `optional` **renameContext**: `string`

Defined in: [packages/pino-logger/src/lib/params.ts:55](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/params.ts#L55)

用于更改结果日志中的属性名称“context”的可选参数，
所以日志会是这样的：
{“level”：30，...“RENAME_CONTEXT_VALUE_HERE”：“AppController”}

***

### useExisting?

> `optional` **useExisting**: `true`

Defined in: [packages/pino-logger/src/lib/params.ts:48](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/params.ts#L48)

如果您使用的是可选参数，可跳过 pino 配置
FastifyAdapter，并且已经在适配器的配置中配置了记录器。优点
这种方法的缺点在常见问题解答部分中有描述
文档：

#### See

https://github.com/iamolegga/nestjs-pino#faq.
