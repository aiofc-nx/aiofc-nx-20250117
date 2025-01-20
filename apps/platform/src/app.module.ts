import {
  Module,
  MiddlewareConsumer,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { LoggingService } from '@aiofc/pino-logger';
import { ClsModule, ClsService } from 'nestjs-cls';
import { PINO_LOGGER_OPTIONS_PROVIDER, PinoService } from '@aiofc/pino-logger';
import { PrettyOptions } from 'pino-pretty';
import { EnvService } from './config/env.service';
import { ZodConfigModule } from './config/zod-config.module';
import { PinoLoggerModule } from '@aiofc/pino-logger';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { TenantMiddleware } from './database/middleware/tenant.middleware';
import { TenantContextService } from './database/services/tenant-context.service';
import { DatabaseModule } from './database/database.module';
import { TenantModule } from './modules/tenant/tenant.module';
import {
  AcceptLanguageResolver,
  HeaderResolver,
  I18nModule,
  QueryResolver,
} from 'nestjs-i18n';
import * as path from 'path';

const loggerOptions: PrettyOptions = {
  colorize: true,
  levelFirst: true,
};

@Module({
  imports: [
    ZodConfigModule,
    PinoLoggerModule.forRoot(LoggingService.httpLoggerOptions()),
    // CLS模块配置
    ClsModule.forRoot({
      global: true,
      middleware: {
        // 自动为所有路由挂载CLS中间件
        mount: true,
        // 启用请求ID生成
        generateId: true,
        // 自定义ID生成器
        idGenerator: (req) =>
          LoggingService.generateLoggerIdForHttpContext(req),
        // 请求开始时记录时间戳
        setup: (cls: ClsService, _req, _res) => {
          cls.set('startTime', new Date().getTime());
        },
        // 优化性能:不保存请求和响应对象
        saveReq: false,
        saveRes: false,
      },
    }),
    DatabaseModule,
    TenantModule,
    I18nModule.forRootAsync({
      // 配置语言解析器，按优先级从上到下
      resolvers: [
        { use: QueryResolver, options: ['lang'] }, // 1. 从URL查询参数解析，例如 ?lang=zh
        AcceptLanguageResolver, // 2. 从 Accept-Language 请求头解析
        new HeaderResolver(['x-lang']), // 3. 从自定义请求头 x-lang 解析
      ],
      // 异步工厂函数，返回i18n模块配置
      useFactory: () => {
        // 判断当前环境
        const isLocal = false;
        const isDevelopment = true;

        return {
          fallbackLanguage: 'zh', // 设置默认语言为英语
          loaderOptions: {
            path: path.join(__dirname, 'i18n'), // 指定翻译文件存放路径
            watch: isLocal, // 本地环境下监听文件变化，支持热更新
          },
          // 生成 TypeScript 类型定义文件的路径
          typesOutputPath: path.join(
            __dirname,
            '../generated/i18n.generated.ts',
          ),
          logging: isLocal || isDevelopment, // 本地和开发环境下启用日志
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [
    EnvService, // 注册 AppConfig 为提供者
    LoggingService,
    {
      provide: PINO_LOGGER_OPTIONS_PROVIDER,
      useValue: loggerOptions,
    },
    PinoService,
    AppService,
    TenantContextService,
  ],
  exports: [PinoService, AppService],
})
export class AppModule implements NestModule {
  constructor() {
    console.log('AppModule构建');
  }
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TenantMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
