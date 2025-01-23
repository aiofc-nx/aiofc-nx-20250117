[AIOFC API 文档](../../../../../../index.md) / [packages/pino-logger/src/lib/InjectPinoLogger](../index.md) / createProvidersForDecorated

# Function: createProvidersForDecorated()

> **createProvidersForDecorated**(): `Provider`\<[`PinoLogger`](../../PinoLogger/classes/PinoLogger.md)\>[]

Defined in: [packages/pino-logger/src/lib/InjectPinoLogger.ts:61](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/InjectPinoLogger.ts#L61)

为所有被装饰的上下文创建提供者数组

## Returns

`Provider`\<[`PinoLogger`](../../PinoLogger/classes/PinoLogger.md)\>[]

PinoLogger 提供者数组

## Example

```typescript
\@Module({
  providers: [
    ...createProvidersForDecorated(),
    // 其他提供者
  ],
})
export class AppModule {}
```
