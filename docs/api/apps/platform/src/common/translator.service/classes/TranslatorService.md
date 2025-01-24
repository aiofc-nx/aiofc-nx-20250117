[@aiofc-nx-2025/source](../../../../../../index.md) / [apps/platform/src/common/translator.service](../index.md) / TranslatorService

# Class: TranslatorService

## Constructors

### new TranslatorService()

```ts
new TranslatorService(
   defaultLanguage, 
   default_source, 
   keyExtractor): TranslatorService
```

#### Parameters

##### defaultLanguage

`string`

##### default\_source

`string`

##### keyExtractor

(`req`) => `string`

#### Returns

[`TranslatorService`](TranslatorService.md)

## Properties

### \_keyExtractor()

```ts
readonly _keyExtractor: (req) => string;
```

#### Parameters

##### req

`any`

#### Returns

`string`

***

### default\_source

```ts
private readonly default_source: string;
```

***

### defaultLanguage

```ts
private defaultLanguage: string;
```

***

### keyExtractor()

```ts
private readonly keyExtractor: (req) => string;
```

#### Parameters

##### req

`any`

#### Returns

`string`

***

### langs

```ts
private langs: object = {};
```

#### Index Signature

```ts
[lang: string]: object
```

## Methods

### findLangs()

```ts
private findLangs(): void
```

#### Returns

`void`

***

### getLangs()

```ts
getLangs(): string[]
```

#### Returns

`string`[]

***

### getSourceFolderPath()

```ts
private getSourceFolderPath(): string
```

#### Returns

`string`

***

### translate()

```ts
translate(key, options?): string
```

#### Parameters

##### key

`string`

##### options?

###### lang

`string`

###### replace

\{\}

#### Returns

`string`
