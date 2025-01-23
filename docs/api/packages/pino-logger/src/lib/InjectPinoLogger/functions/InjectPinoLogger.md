[AIOFC API 文档](../../../../../../index.md) / [packages/pino-logger/src/lib/InjectPinoLogger](../index.md) / InjectPinoLogger

# Function: InjectPinoLogger()

> **InjectPinoLogger**(`context`): `PropertyDecorator` & `ParameterDecorator`

Defined in: [packages/pino-logger/src/lib/InjectPinoLogger.ts:25](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/packages/pino-logger/src/lib/InjectPinoLogger.ts#L25)

注入 PinoLogger 的装饰器工厂函数

## Parameters

### context

`string` = `''`

日志上下文名称，默认为空字符串

## Returns

`PropertyDecorator` & `ParameterDecorator`

Inject 装饰器实例

## Example

```typescript
class UserService {
  constructor(
    @InjectPinoLogger('UserService')
    private readonly logger: PinoLogger
  ) {}
}
```
