[AIOFC API 文档](../../../../../../index.md) / [packages/pino-logger/src/lib/simple.logging.interceptor](../index.md) / SimpleLoggingInterceptor

# Class: SimpleLoggingInterceptor

Defined in: packages/pino-logger/src/lib/simple.logging.interceptor.ts:11

## Implements

- `NestInterceptor`

## Constructors

### new SimpleLoggingInterceptor()

> **new SimpleLoggingInterceptor**(): [`SimpleLoggingInterceptor`](SimpleLoggingInterceptor.md)

#### Returns

[`SimpleLoggingInterceptor`](SimpleLoggingInterceptor.md)

## Methods

### intercept()

> **intercept**(`context`, `next`): `Observable`\<`any`\>

Defined in: packages/pino-logger/src/lib/simple.logging.interceptor.ts:12

Method to implement a custom interceptor.

#### Parameters

##### context

`ExecutionContext`

an `ExecutionContext` object providing methods to access the
route handler and class about to be invoked.

##### next

`CallHandler`

a reference to the `CallHandler`, which provides access to an
`Observable` representing the response stream from the route handler.

#### Returns

`Observable`\<`any`\>

#### Implementation of

`NestInterceptor.intercept`
