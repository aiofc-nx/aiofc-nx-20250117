import { FastifyRequest, FastifyServerOptions } from 'fastify';
import pino, { BaseLogger } from 'pino';
import pretty, { PrettyOptions } from 'pino-pretty';
import { FastifyReply } from 'fastify/types/reply';
import { randomUUID } from 'crypto';
import { IncomingMessage } from 'http';
import { Injectable } from '@nestjs/common';
@Injectable()
export class LoggerUtils {
  static get defaultFastifyAdapterLogger(): FastifyServerOptions {
    return {
      logger: false,
      genReqId: (req) => LoggerUtils.generateLoggerIdForHttpContext(req),
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
      ...LoggerUtils.basePinoPrettyOptions(),
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
    const body = req.body ? JSON.stringify(req.body) : '';
    const query = req.query ? JSON.stringify(req.query) : '';
    return `${req.method} ${req.originalUrl} ${body ? `body: ${body}` : ''} ${query ? `query: ${query}` : ''}`;
  }

  static customResponseMessage(
    req: FastifyRequest,
    res: FastifyReply,
    elapsedTime?: number,
    statusCode?: number,
    tenantId?: string,
  ): string {
    const tenant = tenantId || 'default';
    return `${req.id}-${tenant}-${req.method} ${req.originalUrl} - ${statusCode ?? res.statusCode} (${Math.ceil(elapsedTime ?? res.elapsedTime)}ms)`;
  }
}
