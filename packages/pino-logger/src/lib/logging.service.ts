import { FastifyRequest, FastifyServerOptions } from 'fastify';
import pino, { BaseLogger, LoggerOptions } from 'pino';
import pretty, { PrettyOptions } from 'pino-pretty';
import { FastifyReply } from 'fastify/types/reply';
import { randomUUID } from 'crypto';
import { IncomingMessage } from 'http';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggingService {
  /**
   * Fastify 适配器的默认日志配置
   * - 禁用 Fastify 默认日志器
   * - 配置请求 ID 生成器
   */
  static get defaultFastifyAdapterLogger(): FastifyServerOptions {
    return {
      logger: false,
      genReqId: (req) => LoggingService.generateLoggerIdForHttpContext(req),
    };
  }

  /**
   * 为 HTTP 请求生成唯一标识符
   * - 优先使用请求头中的 x-tracking-id
   * - 如果没有则生成新的 UUID
   */
  static generateLoggerIdForHttpContext(req: IncomingMessage): string {
    const TRACKING_ID_HEADER = 'x-tracking-id';
    return (req?.headers?.[TRACKING_ID_HEADER] as string) || randomUUID();
  }

  /**
   * 创建一个 Pino 日志实例
   */
  static pinoPrettyLogger(options?: PrettyOptions): BaseLogger {
    const pinoPrettyOptions = {
      minimumLevel: 'info' as pino.Level,
      singleLine: true,
      translateTime: true,
      colorize: true,
      levelFirst: true,
      ignore: 'pid,hostname',
      messageKey: 'msg',
      messageFormat: '{msg}',
      sync: true,
      ...(options ?? {}),
    };
    return pino(pretty(pinoPrettyOptions));
  }

  /**
   * 微服务的日志配置
   * - 同步写入日志
   * - debug 级别
   */
  static microserviceLoggerOptions(): PrettyOptions {
    return {
      sync: true,
      minimumLevel: 'debug',
    } satisfies PrettyOptions;
  }

  /**
   * HTTP 服务的日志配置
   * - 使用 pino-pretty 格式化
   * - debug 级别
   */
  static httpLoggerOptions(): Partial<LoggerOptions> {
    return {
      level: 'debug', // 设置日志级别为 debug
      transport: {
        target: 'pino-pretty', // 使用 pino-pretty 格式化器
      },
    };
  }

  /**
   * 基础日志格式化配置
   * - 单行输出
   * - 时间转换
   * - 彩色输出
   * - 级别优先显示
   * - 忽略 pid 和 hostname
   */
  private static basePinoPrettyOptions(): PrettyOptions {
    return {
      minimumLevel: 'info',
      singleLine: true,
      translateTime: true,
      colorize: true,
      levelFirst: true,
      ignore: 'pid,hostname',
      messageKey: 'msg',
      messageFormat: '{msg}',
      sync: true,
    };
  }

  /**
   * 格式化请求接收时的日志消息
   * 格式: METHOD URL
   */
  static customReceivedMessage(req: FastifyRequest): string {
    return `${req.method} ${req.originalUrl}`;
  }

  /**
   * 自定义响应发送时的日志消息
   * 格式: [requestId] [tenantId] METHOD URL - STATUS_CODE (ELAPSED_TIME ms)
   * @param tenantId - 可选的租户 ID，如果不提供则从请求头获取
   */
  static customResponseMessage(
    req: FastifyRequest,
    res: FastifyReply,
    elapsedTime?: number,
    statusCode?: number,
    tenantId?: string,
  ): string {
    const tenant =
      tenantId ||
      (req.headers['x-tenant-id'] as string) ||
      (req.headers['x-tenant-schema'] as string) ||
      'default';
    return `[${req.id}] [${tenant}] ${req.method} ${req.originalUrl} - ${statusCode ?? res.statusCode} (${Math.ceil(elapsedTime ?? res.elapsedTime)}ms)`;
  }

  /**
   * 返回完整的 Pino Pretty 配置选项
   * 合并基础配置和自定义配置
   */
  // static fullPrettyOptions(): Partial<LoggerOptions> {
  //   return {
  //     ...LoggingService.basePinoPrettyOptions(),
  //     transport: {
  //       target: 'pino-pretty',
  //     },
  //     level: 'debug',
  //   };
  // }
}
