import { eq } from 'drizzle-orm';
import { PgTable } from 'drizzle-orm/pg-core';

/**
 * 租户装饰器工厂函数，用于创建一个支持多租户的方法装饰器。
 * 该装饰器会自动为 Drizzle ORM 查询添加租户过滤条件（WHERE tenant_id = '当前租户ID'）。
 * 避免当前租户窜访其他租户的数据。
 *
 * 当应用于返回 Drizzle 查询构建器的方法时，
 * 装饰器会自动添加 where 子句来过滤当前租户的数据。
 *
 * @example
 * ```typescript
 * class UserService {
 *   @WithTenant()
 *   async findUsers() {
 * // 自动转换为 SELECT * FROM users WHERE tenant_id = '当前租户ID'
 *     return db.select().from(users); // 将自动添加租户过滤条件
 *   }
 * }
 * ```
 *
 * @returns 一个方法装饰器，用于包装原始方法并添加租户过滤逻辑
 */
export const WithTenant = () => {
  return (_: any, _propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    /**
     * 包装后的方法，为原始方法的结果添加租户过滤
     * @param args 原始方法的参数
     * @returns 添加租户过滤条件后的结果
     */
    descriptor.value = async function (...args: any[]) {
      // 从上下文中获取当前租户ID
      const tenantId = this.tenantContext.getTenantId();
      // 执行原始方法
      const result = await originalMethod.apply(this, args);

      // 如果返回值是一个 Drizzle 查询构建器（具有 from 属性和 where 方法）
      if (result?.from && typeof result.where === 'function') {
        const table = result.from as PgTable<any>;
        // 添加租户过滤条件到查询中
        return result.where(eq(table['tenantId'], tenantId));
      }

      return result;
    };

    return descriptor;
  };
};
