[@aiofc-nx-2025/source](../../../../../index.md) / apps/platform/src/config/database-z-schema

# apps/platform/src/config/database-z-schema

## Type Aliases

### DatabaseValidatedConfig

```ts
type DatabaseValidatedConfig = z.infer<typeof DatabaseEnvSchema>;
```

## Variables

### DatabaseEnvSchema

```ts
const DatabaseEnvSchema: ZodObject<{
  database: ZodObject<{
     host: ZodString;
     isolationStrategy: ZodDefault<ZodEnum<["schema", "row"]>>;
     name: ZodString;
     password: ZodString;
     pool: ZodOptional<ZodObject<{
        connect_timeout: ZodOptional<ZodNumber>;
        idle_timeout: ZodOptional<ZodNumber>;
        max: ZodOptional<ZodNumber>;
        max_lifetime: ZodOptional<ZodNumber>;
        min: ZodOptional<ZodNumber>;
       }, "strip", {
        connect_timeout: number;
        idle_timeout: number;
        max: number;
        max_lifetime: number;
        min: number;
       }, {
        connect_timeout: number;
        idle_timeout: number;
        max: number;
        max_lifetime: number;
        min: number;
       }>>;
     port: ZodDefault<ZodNumber>;
     systemSchema: ZodString;
     user: ZodString;
    }, "strip", {
     host: string;
     isolationStrategy: "schema" | "row";
     name: string;
     password: string;
     pool: {
        connect_timeout: number;
        idle_timeout: number;
        max: number;
        max_lifetime: number;
        min: number;
       };
     port: number;
     systemSchema: string;
     user: string;
    }, {
     host: string;
     isolationStrategy: "schema" | "row";
     name: string;
     password: string;
     pool: {
        connect_timeout: number;
        idle_timeout: number;
        max: number;
        max_lifetime: number;
        min: number;
       };
     port: number;
     systemSchema: string;
     user: string;
    }>;
 }, "strip", {
  database: {
     host: string;
     isolationStrategy: "schema" | "row";
     name: string;
     password: string;
     pool: {
        connect_timeout: number;
        idle_timeout: number;
        max: number;
        max_lifetime: number;
        min: number;
       };
     port: number;
     systemSchema: string;
     user: string;
    };
 }, {
  database: {
     host: string;
     isolationStrategy: "schema" | "row";
     name: string;
     password: string;
     pool: {
        connect_timeout: number;
        idle_timeout: number;
        max: number;
        max_lifetime: number;
        min: number;
       };
     port: number;
     systemSchema: string;
     user: string;
    };
}>;
```
