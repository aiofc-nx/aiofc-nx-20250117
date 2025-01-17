import { Module, OnModuleInit } from '@nestjs/common';
import { Logger } from '@aiofc/pino-logger';
import { ClsModule, ClsService } from 'nestjs-cls';
import {
  PINO_LOGGER_OPTIONS_PROVIDER,
  PinoLoggerService,
} from '@aiofc/pino-logger';
import { PrettyOptions } from 'pino-pretty';
import { AppConfig } from '../config/app-config.service';
import { ZodConfigModule } from '../config/zod-config.module';
import { PinoLoggerModule } from '@aiofc/pino-logger';
import { AppService } from './app.service';
import { AppController } from './app.controller';

const loggerOptions: PrettyOptions = {
  colorize: true,
  levelFirst: true,
};

@Module({
  imports: [
    // CLS模块配置
    ClsModule.forRoot({
      global: true,
      middleware: {
        // 自动为所有路由挂载CLS中间件
        mount: true,
        // 启用请求ID生成
        generateId: true,
        // 自定义ID生成器
        idGenerator: (req) => Logger.generateLoggerIdForHttpContext(req),
        // 请求开始时记录时间戳
        setup: (cls: ClsService, _req, _res) => {
          cls.set('startTime', new Date().getTime());
        },
        // 优化性能:不保存请求和响应对象
        saveReq: false,
        saveRes: false,
      },
    }),
    ZodConfigModule,
    PinoLoggerModule,
  ],
  controllers: [AppController],
  providers: [
    AppConfig, // 注册 AppConfig 为提供者
    {
      provide: PINO_LOGGER_OPTIONS_PROVIDER,
      useValue: loggerOptions,
    },
    PinoLoggerService,
    AppService,
  ],
  exports: [PinoLoggerService, AppService],
})
export class AppModule implements OnModuleInit {
  constructor(
    private readonly appConfig: AppConfig,
    private readonly logger: PinoLoggerService,
  ) {}

  onModuleInit() {
    Logger.setConfig(this.appConfig);
    this.logger.info('ApiModule initialized');
  }
}
