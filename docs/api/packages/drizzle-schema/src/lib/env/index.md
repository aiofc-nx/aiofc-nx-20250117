[@aiofc-nx-2025/source](../../../../../index.md) / packages/drizzle-schema/src/lib/env

# packages/drizzle-schema/src/lib/env

## Type Aliases

### EnvSchema

```ts
type EnvSchema = z.infer<typeof EnvSchema>;
```

导出环境变量类型定义

## Variables

### default

```ts
default: object;
```

导出经过验证的环境变量对象

#### Type declaration

##### DATABASE\_URL?

```ts
optional DATABASE_URL: string;
```

##### DB\_HOST?

```ts
optional DB_HOST: string;
```

##### DB\_MIGRATING?

```ts
optional DB_MIGRATING: boolean = stringBoolean;
```

##### DB\_NAME?

```ts
optional DB_NAME: string;
```

##### DB\_PASSWORD?

```ts
optional DB_PASSWORD: string;
```

##### DB\_PORT?

```ts
optional DB_PORT: number;
```

##### DB\_SCHEMA?

```ts
optional DB_SCHEMA: string;
```

##### DB\_SEEDING?

```ts
optional DB_SEEDING: boolean = stringBoolean;
```

##### DB\_USER?

```ts
optional DB_USER: string;
```

##### MIGRATIONS\_FOLDER?

```ts
optional MIGRATIONS_FOLDER: string;
```

##### NODE\_ENV?

```ts
optional NODE_ENV: string;
```
