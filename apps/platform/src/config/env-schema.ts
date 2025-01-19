import { z } from 'zod';

export const EnvSchema = z.object({
  /**
   * API服务配置部分
   */
  server: z.object({
    port: z.coerce.number().default(3000), // API服务端口，默认3000
    globalPrefix: z.string().default('api'), // API全局路由前缀，默认'api'
  }),
  /**
   * 数据库配置部分
   */
  database: z.object({
    user: z.string(), // 数据库用户名
    password: z.string(), // 数据库密码
    host: z.string(), // 数据库主机地址
    port: z.coerce.number().default(5432),
    name: z.string(), // 数据库名称
    systemSchema: z.string(), // 系统Schema（用于存储租户信息等系统表）
    pool: z
      .object({
        max: z.number().optional(),
        min: z.number().optional(),
        idle_timeout: z.number().optional(),
        connect_timeout: z.number().optional(),
        max_lifetime: z.number().optional(),
      })
      .optional(),
    isolationStrategy: z.enum(['schema', 'row']).default('row'), // 租户隔离策略：schema=独立Schema隔离，row=行级安全隔离
  }),

  /**
   * 日志配置部分
   */
  logger: z.object({
    trackingIdHeader: z.coerce.string().optional(), // 可选的追踪ID请求头
  }),
});

export type EnvValidatedConfig = z.infer<typeof EnvSchema>;
