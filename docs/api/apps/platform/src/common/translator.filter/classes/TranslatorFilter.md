[AIOFC API 文档](../../../../../../index.md) / [apps/platform/src/common/translator.filter](../index.md) / TranslatorFilter

# Class: TranslatorFilter

Defined in: [apps/platform/src/common/translator.filter.ts:12](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/common/translator.filter.ts#L12)

## Implements

- `ExceptionFilter`

## Constructors

### new TranslatorFilter()

> **new TranslatorFilter**(`translator`): [`TranslatorFilter`](TranslatorFilter.md)

Defined in: [apps/platform/src/common/translator.filter.ts:13](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/common/translator.filter.ts#L13)

#### Parameters

##### translator

[`TranslatorService`](../../translator.service/classes/TranslatorService.md)

#### Returns

[`TranslatorFilter`](TranslatorFilter.md)

## Properties

### translator

> `private` **translator**: [`TranslatorService`](../../translator.service/classes/TranslatorService.md)

Defined in: [apps/platform/src/common/translator.filter.ts:13](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/common/translator.filter.ts#L13)

## Methods

### catch()

> **catch**(`exception`, `host`): `void`

Defined in: [apps/platform/src/common/translator.filter.ts:14](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/common/translator.filter.ts#L14)

Method to implement a custom exception filter.

#### Parameters

##### exception

`any`

the class of the exception being handled

##### host

`ArgumentsHost`

used to access an array of arguments for
the in-flight request

#### Returns

`void`

#### Implementation of

`ExceptionFilter.catch`
