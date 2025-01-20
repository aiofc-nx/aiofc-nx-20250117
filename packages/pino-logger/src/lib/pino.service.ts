import { Inject, Injectable, LoggerService } from '@nestjs/common';
import { ClsService } from 'nestjs-cls';
import { BaseLogger } from 'pino';
import { PrettyOptions } from 'pino-pretty';
import { PINO_LOGGER_OPTIONS_PROVIDER } from './constant.ts';
import { LoggingService } from './logging.service.js';
@Injectable()
export class PinoService implements LoggerService {
  // private static instance: PinoLoggerService;
  private readonly pinoLogger: BaseLogger;

  constructor(
    @Inject(PINO_LOGGER_OPTIONS_PROVIDER) private options: PrettyOptions,
    private readonly cls: ClsService,
  ) {
    this.pinoLogger = LoggingService.pinoPrettyLogger(options);
  }

  // 实现 NestJS LoggerService 接口的方法
  log(message: any, ...optionalParams: any[]) {
    return this.info(message, ...optionalParams); // 映射到 Pino 的 info
  }

  error(message: any, ...optionalParams: any[]) {
    const context = this.getContext();
    this.pinoLogger.error({ ...context }, message, ...optionalParams);
  }

  warn(message: any, ...optionalParams: any[]) {
    const context = this.getContext();
    this.pinoLogger.warn({ ...context }, message, ...optionalParams);
  }

  debug(message: any, ...optionalParams: any[]) {
    const context = this.getContext();
    this.pinoLogger.debug({ ...context }, message, ...optionalParams);
  }

  verbose(message: any, ...optionalParams: any[]) {
    return this.trace(message, ...optionalParams); // 映射到 Pino 的 trace
  }

  // Pino 原生方法
  fatal(message: any, ...optionalParams: any[]) {
    const context = this.getContext();
    this.pinoLogger.fatal({ ...context }, message, ...optionalParams);
  }

  info(message: any, ...optionalParams: any[]) {
    const context = this.getContext();
    this.pinoLogger.info({ ...context }, message, ...optionalParams);
  }

  trace(message: any, ...optionalParams: any[]) {
    const context = this.getContext();
    this.pinoLogger.trace({ ...context }, message, ...optionalParams);
  }

  // 获取请求上下文信息
  private getContext() {
    try {
      return this.cls.get();
    } catch {
      return {};
    }
  }
}
