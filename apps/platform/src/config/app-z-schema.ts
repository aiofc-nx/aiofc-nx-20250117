import { z } from 'zod';

export const AppEnvSchema = z.object({
  /**
   * API服务配置部分
   */
  server: z.object({
    port: z.coerce.number().default(3000), // API服务端口，默认3000
    globalPrefix: z.string().default('api'), // API全局路由前缀，默认'api'
  }),

  /**
   * 日志配置部分
   */
  logger: z.object({
    trackingIdHeader: z.coerce.string().optional(), // 可选的追踪ID请求头
  }),
});

export type AppValidatedConfig = z.infer<typeof AppEnvSchema>;
