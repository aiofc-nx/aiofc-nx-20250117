/**
 * 日志拦截器配置接口
 */
export interface LoggerConfig {
  /**
   * 不需要记录日志的路径
   */
  ignorePaths?: (string | RegExp)[];

  /**
   * 需要脱敏的请求头
   */
  sensitiveHeaders: string[];

  /**
   * 需要脱敏的字段
   */
  sensitiveFields: string[];

  /**
   * 是否记录请求体
   */
  logRequestBody: boolean;

  /**
   * 是否记录响应体
   */
  logResponseBody: boolean;

  trace?: {
    enabled: boolean;
    traceIdHeader: string;
    parentIdHeader: string;
    /**
     * 采样率 (0-1)
     */
    sampleRate?: number;
    /**
     * 是否记录请求耗时分布
     */
    timing?: boolean;
    /**
     * 是否记录调用链路
     */
    callStack?: boolean;
    /**
     * 是否记录系统资源使用
     */
    resources?: boolean;
    /**
     * 缓存追踪配置
     */
    cache?: {
      /**
       * 是否启用缓存追踪
       */
      enabled: boolean;
      /**
       * 是否记录缓存键
       */
      logKeys: boolean;
      /**
       * 是否记录缓存值
       */
      logValues: boolean;
    };
  };

  transport?: {
    target: string;
    options: {
      minimumLevel: string;
      singleLine: boolean;
      translateTime: string;
      colorize: boolean;
      levelFirst: boolean;
      ignore: string;
      messageKey: string;
      messageFormat: string;
      sync: boolean;
    };
  };
}

/**
 * 默认日志配置
 */
export const defaultConfig: LoggerConfig = {
  ignorePaths: ['/health', '/metrics', '/favicon.ico'],
  sensitiveHeaders: ['authorization', 'cookie', 'password', 'x-api-key'],
  sensitiveFields: ['password', 'token', 'secret', 'key'],
  logRequestBody: true,
  logResponseBody: false,
  trace: {
    enabled: true,
    traceIdHeader: 'x-trace-id',
    parentIdHeader: 'x-parent-id',
    sampleRate: 1,
    timing: true,
  },
  transport: {
    target: 'pino-pretty',
    options: {
      minimumLevel: 'info',
      singleLine: true,
      translateTime: 'yyyy-mm-dd HH:MM:ss.l o',
      colorize: true,
      levelFirst: true,
      ignore: 'pid,hostname',
      messageKey: 'msg',
      messageFormat: '{msg}',
      sync: true,
    },
  },
};
