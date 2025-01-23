[AIOFC API 文档](../../../../../../../index.md) / [apps/platform/src/common/pipes/zod.validation.pipe](../index.md) / ZodValidationPipe

# Class: ZodValidationPipe

Defined in: [apps/platform/src/common/pipes/zod.validation.pipe.ts:4](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/common/pipes/zod.validation.pipe.ts#L4)

## Implements

- `PipeTransform`

## Constructors

### new ZodValidationPipe()

> **new ZodValidationPipe**(`schema`): [`ZodValidationPipe`](ZodValidationPipe.md)

Defined in: [apps/platform/src/common/pipes/zod.validation.pipe.ts:5](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/common/pipes/zod.validation.pipe.ts#L5)

#### Parameters

##### schema

`ZodType`

#### Returns

[`ZodValidationPipe`](ZodValidationPipe.md)

## Properties

### schema

> `private` **schema**: `ZodType`

Defined in: [apps/platform/src/common/pipes/zod.validation.pipe.ts:5](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/common/pipes/zod.validation.pipe.ts#L5)

## Methods

### transform()

> **transform**(`value`): `any`

Defined in: [apps/platform/src/common/pipes/zod.validation.pipe.ts:7](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/common/pipes/zod.validation.pipe.ts#L7)

Method to implement a custom pipe.  Called with two parameters

#### Parameters

##### value

`unknown`

argument before it is received by route handler method

#### Returns

`any`

#### Implementation of

`PipeTransform.transform`
