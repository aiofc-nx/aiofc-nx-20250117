[@aiofc-nx-2025/source](../../../../../../index.md) / [apps/platform/src/config/database.config](../index.md) / DatabaseConfig

# Class: DatabaseConfig

EnvService 类

这是一个工具类，负责把经过验证的环境变量（EnvValidatedConfig）分解为若干个配置组，
这些配置组被暴露为属性，供应用程序使用。

职责：
1. 管理应用程序的配置
2. 通过依赖注入提供配置数据
3. 提供类型安全的配置访问接口

## Extends

- [`ZodEnv`](../../../../../../packages/zod-env/src/lib/zod-env/classes/ZodEnv.md)\<[`DatabaseValidatedConfig`](../../database-z-schema/index.md#databasevalidatedconfig)\>

## Constructors

### new DatabaseConfig()

```ts
new DatabaseConfig(): DatabaseConfig
```

#### Returns

[`DatabaseConfig`](DatabaseConfig.md)

#### Overrides

[`ZodEnv`](../../../../../../packages/zod-env/src/lib/zod-env/classes/ZodEnv.md).[`constructor`](../../../../../../packages/zod-env/src/lib/zod-env/classes/ZodEnv.md#constructors)

## Accessors

### config

#### Get Signature

```ts
get config(): T
```

获取验证后的配置对象

##### Returns

`T`

类型安全的配置对象

#### Inherited from

[`ZodEnv`](../../../../../../packages/zod-env/src/lib/zod-env/classes/ZodEnv.md).[`config`](../../../../../../packages/zod-env/src/lib/zod-env/classes/ZodEnv.md#config)

***

### database

#### Get Signature

```ts
get database(): Readonly<{
  host: string;
  isolationStrategy: "schema" | "row";
  name: string;
  password: string;
  pool: {
     connect_timeout: number;
     idle_timeout: number;
     max: number;
     max_lifetime: number;
     min: number;
    };
  port: number;
  systemSchema: string;
  user: string;
}>
```

##### Returns

`Readonly`\<\{
  `host`: `string`;
  `isolationStrategy`: `"schema"` \| `"row"`;
  `name`: `string`;
  `password`: `string`;
  `pool`: \{
     `connect_timeout`: `number`;
     `idle_timeout`: `number`;
     `max`: `number`;
     `max_lifetime`: `number`;
     `min`: `number`;
    \};
  `port`: `number`;
  `systemSchema`: `string`;
  `user`: `string`;
 \}\>