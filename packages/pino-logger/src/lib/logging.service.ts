import { FastifyRequest, FastifyServerOptions } from 'fastify';
import pino, { BaseLogger } from 'pino';
import pretty, { PrettyOptions } from 'pino-pretty';
import { FastifyReply } from 'fastify/types/reply';
import { randomUUID } from 'crypto';
import { IncomingMessage } from 'http';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggingService {
  static get defaultFastifyAdapterLogger(): FastifyServerOptions {
    return {
      logger: false,
      genReqId: (req) => LoggingService.generateLoggerIdForHttpContext(req),
    };
  }

  /**
   * 使用 TRACKING_ID_HEADER（如果存在），否则生成随机 UUID。
   */
  static generateLoggerIdForHttpContext(req: IncomingMessage): string {
    // TODO: 从环境变量中获取
    const TRACKING_ID_HEADER = 'x-tracking-id';
    return (req?.headers?.[TRACKING_ID_HEADER] as string) || randomUUID();
  }

  static pinoPrettyLogger(options?: PrettyOptions): BaseLogger {
    const pinoPrettyOptions = {
      ...LoggingService.basePinoPrettyOptions(),
      ...(options ?? {}),
    };
    return pino(pretty(pinoPrettyOptions));
  }

  static microserviceLoggerOptions(): PrettyOptions {
    return {
      sync: true,
      minimumLevel: 'debug',
    } satisfies PrettyOptions;
  }

  static httpLoggerOptions(): PrettyOptions {
    return {
      sync: false,
      minimumLevel: 'debug',
    } satisfies PrettyOptions;
  }

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

  static customReceivedMessage(req: FastifyRequest): string {
    return `${req.method} ${req.originalUrl}`;
  }

  static customResponseMessage(
    req: FastifyRequest,
    res: FastifyReply,
    elapsedTime?: number,
    statusCode?: number,
    tenantId?: string,
  ): string {
    // 优先使用传入的 tenantId，否则从请求头获取，最后使用默认值
    const tenant =
      tenantId ||
      (req.headers['x-tenant-id'] as string) ||
      (req.headers['x-tenant-schema'] as string) ||
      'default';
    return `[${req.id}] [${tenant}] ${req.method} ${req.originalUrl} - ${statusCode ?? res.statusCode} (${Math.ceil(elapsedTime ?? res.elapsedTime)}ms)`;
  }
}
