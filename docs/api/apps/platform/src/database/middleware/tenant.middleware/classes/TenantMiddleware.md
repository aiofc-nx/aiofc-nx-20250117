[@aiofc-nx-2025/source](../../../../../../../index.md) / [apps/platform/src/database/middleware/tenant.middleware](../index.md) / TenantMiddleware

# Class: TenantMiddleware

租户中间件

用于处理多租户请求的中间件类。
从请求头中提取租户Schema并设置到租户上下文中。

## Constructors

### new TenantMiddleware()

```ts
new TenantMiddleware(tenantContext): TenantMiddleware
```

构造函数

#### Parameters

##### tenantContext

[`TenantContextService`](../../../services/tenant-context.service/classes/TenantContextService.md)

租户上下文服务,用于管理租户信息

#### Returns

[`TenantMiddleware`](TenantMiddleware.md)

## Properties

### tenantContext

```ts
private tenantContext: TenantContextService;
```

租户上下文服务,用于管理租户信息

## Methods

### use()

```ts
use(
   req, 
   _reply, 
next): Promise<void>
```

中间件处理函数

#### Parameters

##### req

`FastifyRequest`\<`IncomingMessage`, `ResolveFastifyRequestType`\<`FastifyTypeProviderDefault`, `FastifySchema`, `RouteGenericInterface`\>\>

Fastify请求对象

##### \_reply

`FastifyReply`\<`IncomingMessage`, `ServerResponse`\>

Fastify响应对象

##### next

() => `void`

调用下一个中间件的函数

#### Returns

`Promise`\<`void`\>

#### Throws

当请求头中没有租户Schema或格式不正确时抛出错误
