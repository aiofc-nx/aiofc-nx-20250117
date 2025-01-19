import { text } from 'drizzle-orm/pg-core';
import { createTenantTable } from './base.schema';

export const tenantTable = createTenantTable('tenant', {
  // 租户名称：用于显示和识别租户的友好名称
  // 例如：'Acme Corporation', 'Tech Solutions Ltd'
  name: text('name').notNull(),

  // 租户Schema：租户在数据库中使用的Schema名称
  // 例如：'t_acme', 't_techsol'
  // 用于数据库多租户隔离，必须以't_'开头
  schema: text('schema').notNull().unique(),

  // 租户描述：可选的额外信息
  // 用于存储租户的详细信息、备注等
  description: text('description'),
});

export type Tenant = typeof tenantTable.$inferSelect;
export type NewTenant = typeof tenantTable.$inferInsert;
