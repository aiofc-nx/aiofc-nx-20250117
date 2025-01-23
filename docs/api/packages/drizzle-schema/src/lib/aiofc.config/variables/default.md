[AIOFC API 文档](../../../../../../index.md) / [packages/drizzle-schema/src/lib/aiofc.config](../index.md) / default

# Variable: default

> **default**: `Config`

Defined in: [packages/drizzle-schema/src/lib/aiofc.config.ts:17](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/drizzle-schema/src/lib/aiofc.config.ts#L17)

Drizzle Kit 配置
运行命令: nx run drizzle-schema:migrate
数据迁移时不走这个配置，通过packages/drizzle-schema/src/command/aiofc.migrate.ts脚本来执行

配置项说明:
- schema: 指定数据库模式文件的路径
- out: 指定生成的迁移文件输出目录
- dialect: 指定数据库类型为 PostgreSQL
- dbCredentials: 数据库连接凭据
  - url: 使用环境变量中的数据库连接字符串
- verbose: 启用详细日志输出
- strict: 启用严格模式,提供更严格的类型检查
