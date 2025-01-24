[@aiofc-nx-2025/source](../../../../../../index.md) / [packages/pino-logger/src/lib/params](../index.md) / Params

# Interface: Params

## Properties

### assignResponse?

```ts
optional assignResponse: boolean;
```

可选参数，用于在调用期间分配响应记录器
`PinoLogger.分配`。默认情况下，“分配”不会影响响应日志
（例如“请求已完成”）。

***

### exclude?

```ts
optional exclude: (string | RouteInfo)[];
```

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

```ts
optional forRoutes: (string | Type | RouteInfo)[];
```

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

```ts
optional pinoHttp: Options | DestinationStream | [Options, DestinationStream];
```

`pino-http` 模块的可选参数

#### See

https://github.com/pinojs/pino-http#pinohttpopts-stream

***

### renameContext?

```ts
optional renameContext: string;
```

用于更改结果日志中的属性名称“context”的可选参数，
所以日志会是这样的：
{“level”：30，...“RENAME_CONTEXT_VALUE_HERE”：“AppController”}

***

### useExisting?

```ts
optional useExisting: true;
```

如果您使用的是可选参数，可跳过 pino 配置
FastifyAdapter，并且已经在适配器的配置中配置了记录器。优点
这种方法的缺点在常见问题解答部分中有描述
文档：

#### See

https://github.com/iamolegga/nestjs-pino#faq.
