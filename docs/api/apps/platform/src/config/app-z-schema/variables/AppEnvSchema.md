[AIOFC API 文档](../../../../../../index.md) / [apps/platform/src/config/app-z-schema](../index.md) / AppEnvSchema

# Variable: AppEnvSchema

> `const` **AppEnvSchema**: `ZodObject`\<\{ `logger`: `ZodObject`\<\{ `trackingIdHeader`: `ZodOptional`\<`ZodString`\>; \}, `"strip"`, \{ `trackingIdHeader`: `string`; \}, \{ `trackingIdHeader`: `string`; \}\>; `server`: `ZodObject`\<\{ `globalPrefix`: `ZodDefault`\<`ZodString`\>; `port`: `ZodDefault`\<`ZodNumber`\>; \}, `"strip"`, \{ `globalPrefix`: `string`; `port`: `number`; \}, \{ `globalPrefix`: `string`; `port`: `number`; \}\>; \}, `"strip"`, \{ `logger`: \{ `trackingIdHeader`: `string`; \}; `server`: \{ `globalPrefix`: `string`; `port`: `number`; \}; \}, \{ `logger`: \{ `trackingIdHeader`: `string`; \}; `server`: \{ `globalPrefix`: `string`; `port`: `number`; \}; \}\>

Defined in: [apps/platform/src/config/app-z-schema.ts:3](https://github.com/aiofc-nx/aiofc-nx-20250117/blob/67a7c164367a9389d2ffea309275a0822750a8a2/apps/platform/src/config/app-z-schema.ts#L3)
