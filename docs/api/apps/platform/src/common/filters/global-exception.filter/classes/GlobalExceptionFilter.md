[AIOFC API 文档](../../../../../../../index.md) / [apps/platform/src/common/filters/global-exception.filter](../index.md) / GlobalExceptionFilter

# Class: GlobalExceptionFilter

Defined in: [apps/platform/src/common/filters/global-exception.filter.ts:55](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/common/filters/global-exception.filter.ts#L55)

全局异常过滤器

负责处理应用程序中所有未捕获的异常,将其转换为标准的错误响应格式

主要功能:
- 处理各种类型的异常并转换为统一的错误响应格式
- 支持国际化错误消息
- 在开发环境下提供详细的错误信息
- 记录错误日志

支持的异常类型:
- UnprocessableEntityException: 处理请求实体验证错误
- ValidationException: 处理自定义验证异常
- HttpException: 处理标准的HTTP异常
- PostgresError: 处理Postgres数据库错误
- Error: 处理其他通用错误

## Extends

- `BaseExceptionFilter`

## Constructors

### new GlobalExceptionFilter()

> **new GlobalExceptionFilter**(`httpAdapterHost`, `i18n`, `cls`): [`GlobalExceptionFilter`](GlobalExceptionFilter.md)

Defined in: [apps/platform/src/common/filters/global-exception.filter.ts:59](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/common/filters/global-exception.filter.ts#L59)

#### Parameters

##### httpAdapterHost

`HttpAdapterHost`

##### i18n

`I18nService`\<[`I18nTranslations`](../../../../generated/i18n.generated/type-aliases/I18nTranslations.md)\>

##### cls

`ClsService`

#### Returns

[`GlobalExceptionFilter`](GlobalExceptionFilter.md)

#### Overrides

`BaseExceptionFilter.constructor`

## Properties

### cls

> `private` `readonly` **cls**: `ClsService`

Defined in: [apps/platform/src/common/filters/global-exception.filter.ts:62](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/common/filters/global-exception.filter.ts#L62)

***

### debug

> `private` **debug**: `boolean` = `false`

Defined in: [apps/platform/src/common/filters/global-exception.filter.ts:56](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/common/filters/global-exception.filter.ts#L56)

***

### httpAdapterHost

> `protected` `readonly` **httpAdapterHost**: `HttpAdapterHost`

Defined in: [apps/platform/src/common/filters/global-exception.filter.ts:60](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/common/filters/global-exception.filter.ts#L60)

#### Inherited from

`BaseExceptionFilter.httpAdapterHost`

***

### i18n

> `private` `readonly` **i18n**: `I18nService`\<[`I18nTranslations`](../../../../generated/i18n.generated/type-aliases/I18nTranslations.md)\>

Defined in: [apps/platform/src/common/filters/global-exception.filter.ts:61](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/common/filters/global-exception.filter.ts#L61)

***

### logger

> `private` `readonly` **logger**: [`Logger`](../../../../../../../packages/pino-logger/src/lib/logger/classes/Logger.md)

Defined in: [apps/platform/src/common/filters/global-exception.filter.ts:57](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/common/filters/global-exception.filter.ts#L57)

## Methods

### catch()

> **catch**(`exception`, `host`): `void`

Defined in: [apps/platform/src/common/filters/global-exception.filter.ts:80](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/common/filters/global-exception.filter.ts#L80)

捕获并处理异常的主要方法

#### Parameters

##### exception

`any`

捕获到的异常对象

##### host

`ArgumentsHost`

提供请求/响应上下文的参数主机

#### Returns

`void`

#### Overrides

`BaseExceptionFilter.catch`

***

### extractValidationErrorDetails()

> `private` **extractValidationErrorDetails**(`errors`): [`ErrorDetailDto`](../../../dto/error-detail.dto/classes/ErrorDetailDto.md)[]

Defined in: [apps/platform/src/common/filters/global-exception.filter.ts:276](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/common/filters/global-exception.filter.ts#L276)

从验证错误数组中提取错误详情

递归处理嵌套的验证错误,生成扁平化的错误详情数组

#### Parameters

##### errors

`ValidationError`[]

验证错误数组

#### Returns

[`ErrorDetailDto`](../../../dto/error-detail.dto/classes/ErrorDetailDto.md)[]

错误详情数组

***

### getPostgresErrorMessage()

> `private` **getPostgresErrorMessage**(`error`): `string`

Defined in: [apps/platform/src/common/filters/global-exception.filter.ts:221](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/common/filters/global-exception.filter.ts#L221)

#### Parameters

##### error

`PostgresError`

#### Returns

`string`

***

### handleError()

> `private` **handleError**(`error`): [`ErrorDto`](../../../dto/error.dto/classes/ErrorDto.md)

Defined in: [apps/platform/src/common/filters/global-exception.filter.ts:254](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/common/filters/global-exception.filter.ts#L254)

处理通用错误

处理所有其他未明确分类的错误

#### Parameters

##### error

`Error`

Error异常对象

#### Returns

[`ErrorDto`](../../../dto/error.dto/classes/ErrorDto.md)

标准化的错误响应对象

***

### handleHttpException()

> `private` **handleHttpException**(`exception`): [`ErrorDto`](../../../dto/error.dto/classes/ErrorDto.md)

Defined in: [apps/platform/src/common/filters/global-exception.filter.ts:188](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/common/filters/global-exception.filter.ts#L188)

处理HTTP异常

#### Parameters

##### exception

`HttpException`

HttpException异常对象

#### Returns

[`ErrorDto`](../../../dto/error.dto/classes/ErrorDto.md)

标准化的错误响应对象

***

### handlePostgresError()

> `private` **handlePostgresError**(`error`): [`ErrorDto`](../../../dto/error.dto/classes/ErrorDto.md)

Defined in: [apps/platform/src/common/filters/global-exception.filter.ts:205](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/common/filters/global-exception.filter.ts#L205)

处理 Postgres 数据库错误

#### Parameters

##### error

`PostgresError`

#### Returns

[`ErrorDto`](../../../dto/error.dto/classes/ErrorDto.md)

***

### handleUnprocessableEntityException()

> `private` **handleUnprocessableEntityException**(`exception`): [`ErrorDto`](../../../dto/error.dto/classes/ErrorDto.md)

Defined in: [apps/platform/src/common/filters/global-exception.filter.ts:134](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/common/filters/global-exception.filter.ts#L134)

处理实体验证异常

当请求负载验证失败时触发,例如:
- 必填字段缺失
- 字段格式不正确
- 字段值不符合约束条件

#### Parameters

##### exception

`UnprocessableEntityException`

UnprocessableEntityException异常对象

#### Returns

[`ErrorDto`](../../../dto/error.dto/classes/ErrorDto.md)

标准化的错误响应对象

***

### handleValidationException()

> `private` **handleValidationException**(`exception`): [`ErrorDto`](../../../dto/error.dto/classes/ErrorDto.md)

Defined in: [apps/platform/src/common/filters/global-exception.filter.ts:159](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/common/filters/global-exception.filter.ts#L159)

处理自定义验证异常

#### Parameters

##### exception

[`ValidationException`](../../../../exceptions/validation.exception/classes/ValidationException.md)

ValidationException异常对象

#### Returns

[`ErrorDto`](../../../dto/error.dto/classes/ErrorDto.md)

标准化的错误响应对象
