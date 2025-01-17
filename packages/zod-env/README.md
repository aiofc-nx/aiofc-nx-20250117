---
title: zod-env
---

## 介绍

zod-env 是一个基于 zod 的库，用于从环境变量中解析和验证数据。

本库没有与任何框架绑定，可以在基于nodejs的任何框架下使用。

配置文件以yaml格式编写，支持环境变量，支持默认值。

## 使用

 ```typescript
 // 定义配置schema
 const configSchema = z.object({
 port: z.number(),
 host: z.string(),
 database: z.object({
     url: z.string()
 })
 });

 // 创建ZodEnv实例
 const env = new ZodEnv(configSchema, {
 configDir: './config',
 configFilePrefix: 'app'
 });

 // 使用配置
 const config = env.config;
 console.log(config.port);    // 类型安全的访问
 console.log(config.host);    // IDE会提供自动完成

```
