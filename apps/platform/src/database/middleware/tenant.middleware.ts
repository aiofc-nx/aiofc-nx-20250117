import { Injectable } from '@nestjs/common';
import { FastifyRequest, FastifyReply } from 'fastify';
import { TenantContextService } from '../services/tenant-context.service';

/**
 * 租户中间件
 *
 * 用于处理多租户请求的中间件类。
 * 从请求头中提取租户Schema并设置到租户上下文中。
 */
@Injectable()
export class TenantMiddleware {
  /**
   * 构造函数
   * @param tenantContext - 租户上下文服务,用于管理租户信息
   */
  constructor(private tenantContext: TenantContextService) {}

  /**
   * 中间件处理函数
   *
   * @param req - Fastify请求对象
   * @param _reply - Fastify响应对象
   * @param next - 调用下一个中间件的函数
   * @throws {Error} 当请求头中没有租户Schema或格式不正确时抛出错误
   */
  async use(req: FastifyRequest, _reply: FastifyReply, next: () => void) {
    // 从请求头中获取租户Schema
    const schema = req.headers['x-tenant-schema'] as string;
    if (!schema) {
      throw new Error('Tenant schema is required');
    }

    // 验证 schema 格式，保证用户输入的schema格式正确
    const schemaRegex = /^t_[a-zA-Z0-9_]+$/;
    if (!schemaRegex.test(schema)) {
      throw new Error(
        'Invalid tenant schema format - must start with "t_" and contain only letters, numbers, and underscores',
      );
    }

    // 将租户Schema存入CLS中，便于在请求时获取租户Schema
    this.tenantContext.setTenantSchemaInCls(schema);
    await next();
  }
}
