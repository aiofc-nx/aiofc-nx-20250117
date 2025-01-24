[@aiofc-nx-2025/source](../../../../../../../index.md) / [packages/pino-logger/src/lib/interfaces/logger.config](../index.md) / LoggerConfig

# Interface: LoggerConfig

日志拦截器配置接口

## Properties

### ignorePaths?

```ts
optional ignorePaths: (string | RegExp)[];
```

不需要记录日志的路径

***

### logRequestBody

```ts
logRequestBody: boolean;
```

是否记录请求体

***

### logResponseBody

```ts
logResponseBody: boolean;
```

是否记录响应体

***

### sensitiveFields

```ts
sensitiveFields: string[];
```

需要脱敏的字段

***

### sensitiveHeaders

```ts
sensitiveHeaders: string[];
```

需要脱敏的请求头

***

### trace?

```ts
optional trace: object;
```

#### cache?

```ts
optional cache: object;
```

缓存追踪配置

##### cache.enabled

```ts
enabled: boolean;
```

是否启用缓存追踪

##### cache.logKeys

```ts
logKeys: boolean;
```

是否记录缓存键

##### cache.logValues

```ts
logValues: boolean;
```

是否记录缓存值

#### callStack?

```ts
optional callStack: boolean;
```

是否记录调用链路

#### enabled

```ts
enabled: boolean;
```

#### parentIdHeader

```ts
parentIdHeader: string;
```

#### resources?

```ts
optional resources: boolean;
```

是否记录系统资源使用

#### sampleRate?

```ts
optional sampleRate: number;
```

采样率 (0-1)

#### timing?

```ts
optional timing: boolean;
```

是否记录请求耗时分布

#### traceIdHeader

```ts
traceIdHeader: string;
```

***

### transport?

```ts
optional transport: object;
```

#### options

```ts
options: object;
```

##### options.colorize

```ts
colorize: boolean;
```

##### options.ignore

```ts
ignore: string;
```

##### options.levelFirst

```ts
levelFirst: boolean;
```

##### options.messageFormat

```ts
messageFormat: string;
```

##### options.messageKey

```ts
messageKey: string;
```

##### options.minimumLevel

```ts
minimumLevel: string;
```

##### options.singleLine

```ts
singleLine: boolean;
```

##### options.sync

```ts
sync: boolean;
```

##### options.translateTime

```ts
translateTime: string;
```

#### target

```ts
target: string;
```
