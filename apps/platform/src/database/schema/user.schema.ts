import { createTenantTable } from './base.schema';
import { varchar } from 'drizzle-orm/pg-core';

/**
 * 用户表 schema 定义
 * 继承自多租户基础表结构
 * @see createTenantTable
 */
export const users = createTenantTable('users', {
  /** 用户邮箱地址 */
  email: varchar('email', { length: 255 }).notNull(),
  /** 用户姓名 */
  name: varchar('name', { length: 50 }).notNull(),
  /** 用户密码（加密存储） */
  password: varchar('password', { length: 100 }).notNull(),
});

/** 用户表记录类型 - 用于查询结果类型推断 */
export type User = typeof users.$inferSelect;
/** 新用户数据类型 - 用于插入数据时的类型推断 */
export type NewUser = typeof users.$inferInsert;
