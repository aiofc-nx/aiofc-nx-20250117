[AIOFC API 文档](../../../../../../index.md) / [apps/platform/src/utils/replace-string](../index.md) / default

# Function: default()

> **default**(`string`, `needle`, `replacement`, `options`): `string`

Defined in: [apps/platform/src/utils/replace-string.ts:49](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/utils/replace-string.ts#L49)

高级字符串替换函数,支持多种替换模式

## Parameters

### string

`string`

要处理的原始字符串

### needle

`string`

要查找的子字符串

### replacement

替换内容(可以是字符串或函数)

`string` | `ReplacementFunction`

### options

`ReplaceOptions` = `{}`

配置选项

## Returns

`string`

替换后的新字符串

## Example

```ts
// 基本字符串替换
replaceString('Hello world', 'world', 'everyone')
// 返回: 'Hello everyone'

// 使用替换函数
replaceString('hello HELLO', 'hello', (match) => match.toUpperCase(), {
  caseInsensitive: true
})
// 返回: 'HELLO HELLO'

// 从指定位置开始替换
replaceString('test test test', 'test', 'xyz', { fromIndex: 5 })
// 返回: 'test xyz xyz'
```
