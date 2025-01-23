[AIOFC API 文档](../../../../../../index.md) / [packages/zod-env/src/lib/z-yaml-loader](../index.md) / YamlFileOptions

# Interface: YamlFileOptions

Defined in: [packages/zod-env/src/lib/z-yaml-loader.ts:25](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/zod-env/src/lib/z-yaml-loader.ts#L25)

接口用于描述配置文件（yaml）的设置选项

## Remarks

包括:
- 配置文件的存放目录
- 配置文件的文件名前缀
通过这些选项，可以灵活地指定配置文件的存放位置和文件命名方式。

命名规则:
- 配置文件的文件名格式为: `{prefix}.{NODE_ENV}.yaml`

## Example

```typescript
const options: YamlFileOptions = {
  configDir: '/path/to/config',    // 配置文件存放目录
  configFilePrefix: 'app'          // 生成的配置文件名将为: app.development.yaml
};
```

## Properties

### configDir?

> `optional` **configDir**: `string`

Defined in: [packages/zod-env/src/lib/z-yaml-loader.ts:30](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/zod-env/src/lib/z-yaml-loader.ts#L30)

配置文件目录路径

#### Default

```ts
process.cwd()/assets
```

***

### configFilePrefix

> **configFilePrefix**: `string`

Defined in: [packages/zod-env/src/lib/z-yaml-loader.ts:36](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/zod-env/src/lib/z-yaml-loader.ts#L36)

配置文件名称前缀

#### Default

```ts
'config'
```

#### Remarks

最终的配置文件名格式为: `{prefix}.{NODE_ENV}.yaml`
