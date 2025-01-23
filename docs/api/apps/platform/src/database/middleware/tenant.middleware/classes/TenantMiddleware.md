[AIOFC API 文档](../../../../../../../index.md) / [apps/platform/src/database/middleware/tenant.middleware](../index.md) / TenantMiddleware

# Class: TenantMiddleware

Defined in: [apps/platform/src/database/middleware/tenant.middleware.ts:12](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/database/middleware/tenant.middleware.ts#L12)

租户中间件

用于处理多租户请求的中间件类。
从请求头中提取租户Schema并设置到租户上下文中。

## Constructors

### new TenantMiddleware()

> **new TenantMiddleware**(`tenantContext`): [`TenantMiddleware`](TenantMiddleware.md)

Defined in: [apps/platform/src/database/middleware/tenant.middleware.ts:17](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/database/middleware/tenant.middleware.ts#L17)

构造函数

#### Parameters

##### tenantContext

[`TenantContextService`](../../../services/tenant-context.service/classes/TenantContextService.md)

租户上下文服务,用于管理租户信息

#### Returns

[`TenantMiddleware`](TenantMiddleware.md)

## Properties

### tenantContext

> `private` **tenantContext**: [`TenantContextService`](../../../services/tenant-context.service/classes/TenantContextService.md)

Defined in: [apps/platform/src/database/middleware/tenant.middleware.ts:17](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/database/middleware/tenant.middleware.ts#L17)

租户上下文服务,用于管理租户信息

## Methods

### use()

> **use**(`req`, `_reply`, `next`): `Promise`\<`void`\>

Defined in: [apps/platform/src/database/middleware/tenant.middleware.ts:27](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/database/middleware/tenant.middleware.ts#L27)

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
