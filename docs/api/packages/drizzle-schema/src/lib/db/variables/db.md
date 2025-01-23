[AIOFC API 文档](../../../../../../index.md) / [packages/drizzle-schema/src/lib/db](../index.md) / db

# Variable: db

> `const` **db**: `PostgresJsDatabase`\<[`packages/drizzle-schema/src/schemas`](../../../schemas/index.md)\> & `object`

Defined in: [packages/drizzle-schema/src/lib/db.ts:31](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/drizzle-schema/src/lib/db.ts#L31)

/**
 * Drizzle ORM 实例化
 *
 * 使用 drizzle-orm 创建数据库操作实例:
 * - 传入上面创建的数据库连接
 * - 加载预定义的数据库模式(schema)
 * - 启用日志记录功能,方便调试
