[AIOFC API 文档](../../../../../../index.md) / [apps/platform/src/common/translator.service](../index.md) / TranslatorService

# Class: TranslatorService

Defined in: [apps/platform/src/common/translator.service.ts:7](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/common/translator.service.ts#L7)

## Constructors

### new TranslatorService()

> **new TranslatorService**(`defaultLanguage`, `default_source`, `keyExtractor`): [`TranslatorService`](TranslatorService.md)

Defined in: [apps/platform/src/common/translator.service.ts:9](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/common/translator.service.ts#L9)

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

> `readonly` **\_keyExtractor**: (`req`) => `string`

Defined in: [apps/platform/src/common/translator.service.ts:8](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/common/translator.service.ts#L8)

#### Parameters

##### req

`any`

#### Returns

`string`

***

### default\_source

> `private` `readonly` **default\_source**: `string`

Defined in: [apps/platform/src/common/translator.service.ts:11](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/common/translator.service.ts#L11)

***

### defaultLanguage

> `private` **defaultLanguage**: `string`

Defined in: [apps/platform/src/common/translator.service.ts:10](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/common/translator.service.ts#L10)

***

### keyExtractor()

> `private` `readonly` **keyExtractor**: (`req`) => `string`

Defined in: [apps/platform/src/common/translator.service.ts:13](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/common/translator.service.ts#L13)

#### Parameters

##### req

`any`

#### Returns

`string`

***

### langs

> `private` **langs**: `object` = `{}`

Defined in: [apps/platform/src/common/translator.service.ts:19](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/common/translator.service.ts#L19)

#### Index Signature

\[`lang`: `string`\]: `object`

## Methods

### findLangs()

> `private` **findLangs**(): `void`

Defined in: [apps/platform/src/common/translator.service.ts:29](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/common/translator.service.ts#L29)

#### Returns

`void`

***

### getLangs()

> **getLangs**(): `string`[]

Defined in: [apps/platform/src/common/translator.service.ts:21](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/common/translator.service.ts#L21)

#### Returns

`string`[]

***

### getSourceFolderPath()

> `private` **getSourceFolderPath**(): `string`

Defined in: [apps/platform/src/common/translator.service.ts:25](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/common/translator.service.ts#L25)

#### Returns

`string`

***

### translate()

> **translate**(`key`, `options`?): `string`

Defined in: [apps/platform/src/common/translator.service.ts:64](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/common/translator.service.ts#L64)

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
