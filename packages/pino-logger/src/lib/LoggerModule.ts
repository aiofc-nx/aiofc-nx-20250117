import { Global, Module, DynamicModule, Inject } from '@nestjs/common';
import { Provider } from '@nestjs/common/interfaces';

import { APP_INTERCEPTOR } from '@nestjs/core';
import { ClsModule } from 'nestjs-cls';
import { ClsService } from 'nestjs-cls';
import { UnifiedLoggingInterceptor } from './unified.logging.interceptor';

import { createProvidersForDecorated } from './InjectPinoLogger';
import {
  LoggerModuleAsyncParams,
  Params,
  PARAMS_PROVIDER_TOKEN,
} from './params';
import { PinoLogger } from './PinoLogger';
import { Logger } from './logger';
import { LoggerConfig } from './interfaces/logger.config';

/**
 * As NestJS@11 still supports express@4 `*`-style routing by itself let's keep
 * it for the backward compatibility. On the next major NestJS release `*` we
 * can replace it with `/{*splat}`, and drop the support for NestJS@9 and below.
 */

@Global()
@Module({ providers: [Logger], exports: [Logger] })
export class LoggerModule {
  static forRoot(params?: Params & Partial<LoggerConfig>): DynamicModule {
    const paramsProvider: Provider<Params> = {
      provide: PARAMS_PROVIDER_TOKEN,
      useValue: params || {},
    };

    const decorated = createProvidersForDecorated();

    return {
      module: LoggerModule,
      imports: [
        ClsModule.forRoot({
          global: true,
          middleware: {
            mount: true,
            setup: (cls, req) => {
              cls.set('requestId', req.id);
              cls.set('traceId', req.headers['x-trace-id'] || req.id);
            },
          },
        }),
      ],
      providers: [
        Logger,
        ...decorated,
        PinoLogger,
        paramsProvider,
        {
          provide: APP_INTERCEPTOR,
          useFactory: (cls: ClsService, logger: PinoLogger) => {
            return new UnifiedLoggingInterceptor(cls, logger, params);
          },
          inject: [ClsService, PinoLogger],
        },
      ],
      exports: [Logger, ...decorated, PinoLogger, paramsProvider],
      global: true,
    };
  }

  static forRootAsync(
    params: LoggerModuleAsyncParams & {
      useFactory: (
        ...args: any[]
      ) =>
        | Promise<Params & Partial<LoggerConfig>>
        | (Params & Partial<LoggerConfig>);
    },
  ): DynamicModule {
    const paramsProvider: Provider<Params & Partial<LoggerConfig>> = {
      provide: PARAMS_PROVIDER_TOKEN,
      useFactory: params.useFactory,
      inject: params.inject,
    };

    const decorated = createProvidersForDecorated();

    return {
      module: LoggerModule,
      imports: [
        ClsModule.forRoot({
          global: true,
          middleware: {
            mount: true,
            setup: (cls, req) => {
              cls.set('requestId', req.id);
              cls.set('traceId', req.headers['x-trace-id'] || req.id);
            },
          },
        }),
        ...(params.imports || []),
      ],
      providers: [
        Logger,
        ...decorated,
        PinoLogger,
        paramsProvider,
        {
          provide: APP_INTERCEPTOR,
          useFactory: async (
            cls: ClsService,
            logger: PinoLogger,
            asyncParams: Params & Partial<LoggerConfig>,
          ) => {
            return new UnifiedLoggingInterceptor(cls, logger, asyncParams);
          },
          inject: [ClsService, PinoLogger, PARAMS_PROVIDER_TOKEN],
        },
        ...(params.providers || []),
      ],
      exports: [Logger, ...decorated, PinoLogger, paramsProvider],
      global: true,
    };
  }

  constructor(@Inject(PARAMS_PROVIDER_TOKEN) private readonly params: Params) {}
}
