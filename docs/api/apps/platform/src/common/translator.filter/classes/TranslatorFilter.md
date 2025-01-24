[@aiofc-nx-2025/source](../../../../../../index.md) / [apps/platform/src/common/translator.filter](../index.md) / TranslatorFilter

# Class: TranslatorFilter

## Implements

- `ExceptionFilter`

## Constructors

### new TranslatorFilter()

```ts
new TranslatorFilter(translator): TranslatorFilter
```

#### Parameters

##### translator

[`TranslatorService`](../../translator.service/classes/TranslatorService.md)

#### Returns

[`TranslatorFilter`](TranslatorFilter.md)

## Properties

### translator

```ts
private translator: TranslatorService;
```

## Methods

### catch()

```ts
catch(exception, host): void
```

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

```ts
ExceptionFilter.catch
```
