import { DynamicModule, Module } from '@nestjs/common';
import { PinoLoggerService } from './pino-logger.service';
import { PINO_LOGGER_OPTIONS_PROVIDER } from './constant.ts';
import { PrettyOptions } from 'pino-pretty';
import { DrizzleLoggerService } from './drizzle-logger.service';

@Module({})
export class PinoLoggerModule {
  static forRoot(loggerOptions: PrettyOptions): DynamicModule {
    return {
      module: PinoLoggerModule,
      providers: [
        {
          provide: PINO_LOGGER_OPTIONS_PROVIDER,
          useValue: loggerOptions,
        },
        PinoLoggerService,
        DrizzleLoggerService,
      ],
      imports: [
        // ConfigModule.forRoot({
        //   validate: LoggingConfig.validateConfiguration,
        // }),
        // SEE: https://papooch.github.io/nestjs-cls/api/module-options
        // ClsModule.forRoot({
        //   global: true,
        //   middleware: {
        //     // automatically mount the ClsMiddleware for all routes
        //     mount: true,
        //     generateId: true,
        //     idGenerator: (req) =>
        //       LoggerUtils.generateLoggerIdForHttpContext(req),
        //     setup: (cls: ClsService, _req, _res) => {
        //       cls.set('startTime', new Date().getTime());
        //     },
        //     // We don't need the req/res in to be stored in the store
        //     saveReq: false,
        //     saveRes: false,
        //   },
        // }),
      ],
      exports: [PinoLoggerService, DrizzleLoggerService],
    };
  }
}
