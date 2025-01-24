[@aiofc-nx-2025/source](../../../../../../../index.md) / [apps/platform/src/database/services/tenant-context.service](../index.md) / TenantContextService

# Class: TenantContextService

租户上下文服务

用于管理多租户系统中的租户Schema信息。
这里的Schema 是指租户在数据库中使用的Schema名称。
我们使用CLS来存储租户Schema信息，便于在请求时获取租户Schema。而不是从数据库中获取。
该服务的作用域为请求级别(REQUEST),确保每个请求都有其独立的租户上下文。

## Constructors

### new TenantContextService()

```ts
new TenantContextService(cls): TenantContextService
```

#### Parameters

##### cls

`ClsService`

#### Returns

[`TenantContextService`](TenantContextService.md)

## Properties

### cls

```ts
private readonly cls: ClsService;
```

***

### TENANT\_ID\_KEY

```ts
private readonly TENANT_ID_KEY: "tenantId" = 'tenantId';
```

***

### TENANT\_SCHEMA\_KEY

```ts
private readonly TENANT_SCHEMA_KEY: "tenantSchema" = 'tenantSchema';
```

## Methods

### getTenantId()

```ts
getTenantId(): string
```

获取当前租户ID

#### Returns

`string`

当前租户的ID

#### Throws

如果租户ID未设置则抛出错误

***

### getTenantSchemaFromCls()

```ts
getTenantSchemaFromCls(): string
```

获取当前租户Schema

#### Returns

`string`

当前租户的Schema标识符

#### Throws

如果租户上下文未设置则抛出错误

***

### setTenantId()

```ts
setTenantId(tenantId): void
```

设置当前租户ID到CLS中

#### Parameters

##### tenantId

`string`

要设置的租户ID

#### Returns

`void`

***

### setTenantSchemaInCls()

```ts
setTenantSchemaInCls(schema): void
```

设置当前租户Schema到CLS中

#### Parameters

##### schema

`string`

要设置的租户Schema标识符

#### Returns

`void`
