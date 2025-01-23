[AIOFC API 文档](../../../../../../index.md) / [apps/platform/src/exceptions/validation.exception](../index.md) / ValidationException

# Class: ValidationException

Defined in: [apps/platform/src/exceptions/validation.exception.ts:20](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/exceptions/validation.exception.ts#L20)

验证异常类

用于抛出带有自定义错误代码和消息的验证错误

 ValidationException

## Example

```ts
throw new ValidationException(ErrorCode.V001, '用户名不能为空');
```

## Param

错误代码,默认为 V000 (通用验证错误)

## Param

可选的错误消息。如果未提供,将使用错误代码对应的默认消息

## Extends

- `BadRequestException`

## Constructors

### new ValidationException()

> **new ValidationException**(`error`, `message`?): [`ValidationException`](ValidationException.md)

Defined in: [apps/platform/src/exceptions/validation.exception.ts:21](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/exceptions/validation.exception.ts#L21)

#### Parameters

##### error

[`ErrorCode`](../../../common/constants/error-code.constant/enumerations/ErrorCode.md) = `ErrorCode.V000`

##### message?

`string`

#### Returns

[`ValidationException`](ValidationException.md)

#### Overrides

`BadRequestException.constructor`
