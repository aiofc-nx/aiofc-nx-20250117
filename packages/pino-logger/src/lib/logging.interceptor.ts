import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { FastifyRequest, FastifyReply } from 'fastify';
import { Observable, tap } from 'rxjs';
import { Logger as NestJSLogger } from '@nestjs/common/services/logger.service';
import { ClsService } from 'nestjs-cls';
import { LoggingService } from './logging.service';
/**
 * 这是一个 HTTP 上下文拦截器，用于记录请求/响应的 HTTP 方法/状态代码/等
 * 这并不理想，因为可以在 Nestjs 拦截器（例如中间件或过滤器）之前/之后修改请求/响应。
 */
/**
 * 自定义日志拦截器
 *
 * 主要机制:
 * 1. 请求拦截
 * - 使用@Injectable()装饰器标记为可注入服务
 * - 实现NestInterceptor接口进行请求拦截
 * - 通过ExecutionContext获取请求和响应对象
 *
 * 2. 日志记录
 * - 使用NestJS内置Logger进行日志输出
 * - 记录请求接收和响应完成的日志
 * - 通过LoggerUtils工具类格式化日志消息
 *
 * 3. 性能监控
 * - 使用ClsService存储请求开始时间
 * - 计算请求处理耗时
 * - 在响应时输出耗时信息
 *
 * 要点:
 * - 统一的日志格式和处理
 * - 请求全生命周期的监控
 * - 错误情况下也保证日志输出
 * - 使用响应式编程处理异步流程
 */
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new NestJSLogger(LoggingInterceptor.name);

  constructor(private readonly cls: ClsService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return this.cls.run(() => {
      const [request, response] = [
        context.switchToHttp().getRequest<FastifyRequest>(),
        context.switchToHttp().getResponse<FastifyReply>(),
      ];

      // 记录请求接收日志
      this.logger.log(LoggingService.customReceivedMessage(request));

      // 记录请求开始时间
      this.cls.set('startTime', new Date().getTime());

      return next.handle().pipe(
        tap({
          next: (): void => {
            const elapsedTime =
              new Date().getTime() - Number(this.cls.get('startTime'));
            this.logger.log(
              LoggingService.customResponseMessage(
                request,
                response,
                elapsedTime,
              ),
            );
          },
          error: (error): void => {
            const elapsedTime =
              new Date().getTime() - Number(this.cls.get('startTime'));
            this.logger.error(
              `Error details: ${error.message}\n${error.stack}`,
            );
            this.logger.log(
              LoggingService.customResponseMessage(
                request,
                response,
                elapsedTime,
              ),
            );
          },
        }),
      );
    });
  }
}
