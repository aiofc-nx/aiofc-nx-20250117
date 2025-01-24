[@aiofc-nx-2025/source](../../../../../../index.md) / apps/platform/src/database/schema/user.schema

# apps/platform/src/database/schema/user.schema

## Enumerations

| Enumeration | Description |
| ------ | ------ |
| [UserStatus](enumerations/UserStatus.md) | - |

## Type Aliases

### NewUser

```ts
type NewUser = typeof userTable.$inferInsert;
```

新用户数据类型 - 用于插入数据时的类型推断

***

### User

```ts
type User = typeof userTable.$inferSelect;
```

用户表记录类型 - 用于查询结果类型推断

## Variables

### userRelations

```ts
const userRelations: Relations<{
  tenant: One<true>;
}>;
```

***

### userTable

```ts
const userTable: PgTableWithColumns<{}>;
```

用户表 schema 定义
继承自多租户基础表结构

#### See

createTenantTable
