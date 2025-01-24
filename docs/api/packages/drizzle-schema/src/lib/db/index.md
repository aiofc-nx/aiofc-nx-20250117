[@aiofc-nx-2025/source](../../../../../index.md) / packages/drizzle-schema/src/lib/db

# packages/drizzle-schema/src/lib/db

## Type Aliases

### db

```ts
type db = typeof db;
```

类型导出

导出 db 实例的类型定义,用于类型检查和智能提示

## Variables

### db

```ts
const db: PostgresJsDatabase<packages/drizzle-schema/src/schemas> & object;
```

/**
 * Drizzle ORM 实例化
 *
 * 使用 drizzle-orm 创建数据库操作实例:
 * - 传入上面创建的数据库连接
 * - 加载预定义的数据库模式(schema)
 * - 启用日志记录功能,方便调试

## Functions

### connection()

数据库连接配置

创建一个 PostgreSQL 数据库连接实例:
- 使用环境变量 DATABASE_URL 作为连接字符串
- 当进行数据库迁移或数据填充时,将最大连接数限制为1
- 在数据填充过程中忽略数据库通知消息

#### Call Signature

```ts
function connection<T, K>(first, ...rest): Return<T, K>
```

Query helper

##### Type Parameters

• **T**

• **K** *extends* 
  \| readonly `string`[]
  \| readonly \[\]
  \| readonly `never`[]
  \| \[readonly `never`[]\]
  \| readonly `string` & keyof `T`\<`T`\>[]
  \| \[readonly `string` & keyof `T`\<`T`\>[]\]

##### Parameters

###### first

`T` & `First`\<`T`, `K`, `never`\>

Define how the helper behave

###### rest

...`K`

Other optional arguments, depending on the helper type

##### Returns

`Return`\<`T`, `K`\>

An helper object usable as tagged template parameter in sql queries

#### Call Signature

```ts
function connection<T>(template, ...parameters): PendingQuery<T>
```

Execute the SQL query passed as a template string. Can only be used as template string tag.

##### Type Parameters

• **T** *extends* readonly `object`[] = `Row`[]

##### Parameters

###### template

`TemplateStringsArray`

The template generated from the template string

###### parameters

...readonly `ParameterOrFragment`\<`never`\>[]

Interpoled values of the template string

##### Returns

`PendingQuery`\<`T`\>

A promise resolving to the result of your query

## References

### default

Renames and re-exports [db](index.md#db-1)
