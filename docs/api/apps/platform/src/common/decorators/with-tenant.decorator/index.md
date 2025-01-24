[@aiofc-nx-2025/source](../../../../../../index.md) / apps/platform/src/common/decorators/with-tenant.decorator

# apps/platform/src/common/decorators/with-tenant.decorator

## Functions

### WithTenant()

```ts
function WithTenant(): (_, _propertyKey, descriptor) => PropertyDescriptor
```

租户装饰器工厂函数，用于创建一个支持多租户的方法装饰器。
该装饰器会自动为 Drizzle ORM 查询添加租户过滤条件（WHERE tenant_id = '当前租户ID'）。
避免当前租户窜访其他租户的数据。

当应用于返回 Drizzle 查询构建器的方法时，
装饰器会自动添加 where 子句来过滤当前租户的数据。

#### Returns

`Function`

一个方法装饰器，用于包装原始方法并添加租户过滤逻辑

##### Parameters

###### \_

`any`

###### \_propertyKey

`string`

###### descriptor

`PropertyDescriptor`

##### Returns

`PropertyDescriptor`

#### Example

```typescript
class UserService {
  @WithTenant()
  async findUsers() {
// 自动转换为 SELECT * FROM users WHERE tenant_id = '当前租户ID'
    return db.select().from(users); // 将自动添加租户过滤条件
  }
}
```
