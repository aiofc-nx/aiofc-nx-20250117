import {
  Module,
  MiddlewareConsumer,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { LoggerModule } from '@aiofc/pino-logger';
import { ZodConfigModule } from './config/zod-config.module';
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
  I18nJsonLoader,
  QueryResolver,
} from 'nestjs-i18n';
import * as path from 'path';
import { AppConfig } from './config/app.config';

@Module({
  imports: [
    ZodConfigModule,
    LoggerModule.forRoot({
      pinoHttp: {
        level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
        transport:
          process.env.NODE_ENV === 'development'
            ? {
                target: 'pino-pretty',
                options: {
                  colorize: true,
                },
              }
            : undefined,
      },
      trace: {
        enabled: true,
        traceIdHeader: 'x-trace-id',
        parentIdHeader: 'x-parent-id',
        cache: {
          enabled: true,
          logKeys: true,
          logValues: false,
        },
      },
      ignorePaths: ['/health', '/metrics'],
      logRequestBody: true,
      logResponseBody: true,
      sensitiveHeaders: ['authorization', 'cookie'],
      sensitiveFields: ['password', 'token'],
    }),
    DatabaseModule,
    TenantModule,
    I18nModule.forRootAsync({
      useFactory: () => ({
        fallbackLanguage: 'zh',
        loaderOptions: {
          path: path.join(__dirname, 'i18n'),
          watch: true,
          includeSubfolders: true,
        },
        loaders: [I18nJsonLoader],
        typesOutputPath: path.join(__dirname, '../generated/i18n.generated.ts'),
        logging: true,
        debug: true,
      }),
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
        new HeaderResolver(['x-lang']),
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppConfig, AppService, TenantContextService],
  exports: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TenantMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
