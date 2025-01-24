[@aiofc-nx-2025/source](../../../../../index.md) / apps/platform/src/config/app-z-schema

# apps/platform/src/config/app-z-schema

## Type Aliases

### AppValidatedConfig

```ts
type AppValidatedConfig = z.infer<typeof AppEnvSchema>;
```

## Variables

### AppEnvSchema

```ts
const AppEnvSchema: ZodObject<{
  logger: ZodObject<{
     trackingIdHeader: ZodOptional<ZodString>;
    }, "strip", {
     trackingIdHeader: string;
    }, {
     trackingIdHeader: string;
    }>;
  server: ZodObject<{
     globalPrefix: ZodDefault<ZodString>;
     port: ZodDefault<ZodNumber>;
    }, "strip", {
     globalPrefix: string;
     port: number;
    }, {
     globalPrefix: string;
     port: number;
    }>;
 }, "strip", {
  logger: {
     trackingIdHeader: string;
    };
  server: {
     globalPrefix: string;
     port: number;
    };
 }, {
  logger: {
     trackingIdHeader: string;
    };
  server: {
     globalPrefix: string;
     port: number;
    };
}>;
```
