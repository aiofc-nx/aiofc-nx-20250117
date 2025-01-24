[@aiofc-nx-2025/source](../../../../../../../index.md) / [apps/platform/src/common/pipes/zod.validation.pipe](../index.md) / ZodValidationPipe

# Class: ZodValidationPipe

## Implements

- `PipeTransform`

## Constructors

### new ZodValidationPipe()

```ts
new ZodValidationPipe(schema): ZodValidationPipe
```

#### Parameters

##### schema

`ZodType`

#### Returns

[`ZodValidationPipe`](ZodValidationPipe.md)

## Properties

### schema

```ts
private schema: ZodType;
```

## Methods

### transform()

```ts
transform(value): any
```

Method to implement a custom pipe.  Called with two parameters

#### Parameters

##### value

`unknown`

argument before it is received by route handler method

#### Returns

`any`

#### Implementation of

```ts
PipeTransform.transform
```
