import {
  Module,
  MiddlewareConsumer,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { Logger } from '@aiofc/pino-logger';
import { ClsModule, ClsService } from 'nestjs-cls';
import {
  PINO_LOGGER_OPTIONS_PROVIDER,
  PinoLoggerService,
} from '@aiofc/pino-logger';
import { PrettyOptions } from 'pino-pretty';
import { EnvOption } from './config/env-option';
import { ZodConfigModule } from './config/zod-config.module';
import { PinoLoggerModule } from '@aiofc/pino-logger';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { TenantMiddleware } from './database/middleware/tenant.middleware';
import { TenantContextService } from './database/services/tenant-context.service';
import { DatabaseModule } from './database/database.module';
import { TenantModule } from './modules/tenant/tenant.module';

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
    DatabaseModule,
    TenantModule,
  ],
  controllers: [AppController],
  providers: [
    EnvOption, // 注册 AppConfig 为提供者
    {
      provide: PINO_LOGGER_OPTIONS_PROVIDER,
      useValue: loggerOptions,
    },
    PinoLoggerService,
    AppService,
    TenantContextService,
  ],
  exports: [PinoLoggerService, AppService],
})
export class AppModule implements NestModule {
  constructor() {
    console.log('AppModule构建');
  }
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TenantMiddleware)
      .exclude(
        { path: '/health', method: RequestMethod.ALL },
        { path: '/docs', method: RequestMethod.ALL },
        { path: '/swagger', method: RequestMethod.ALL },
        { path: '/tenants', method: RequestMethod.ALL },
        { path: '/tenants/(.*)', method: RequestMethod.ALL },
      )
      .forRoutes('*');
  }
}
