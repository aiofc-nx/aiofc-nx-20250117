import { Injectable } from '@nestjs/common';
import { EnvOption } from '../../config/env-option';
import { DatabaseService } from './database.service';

/**
 * Schema管理相关的错误枚举
 */
export enum SchemaError {
  SCHEMA_NOT_FOUND = 'SCHEMA_NOT_FOUND', // 租户Schema不存在
  SCHEMA_ALREADY_EXISTS = 'SCHEMA_ALREADY_EXISTS', // 租户Schema已存在
}

/**
 * Schema管理服务
 *
 * 用于管理多租户系统中的数据库Schema。
 * 数据库Schema管理是一个谨慎的业务逻辑，需要确保Schema的创建和初始化是原子性的，
 * 以避免在创建Schema时出现竞争条件。
 * 这项工作的权限应该严格控制，只有管理员可以执行。
 *
 * 主要功能包括:
 * - Schema存在性检查
 * - 租户Schema的创建
 * - Schema结构的初始化
 */
@Injectable()
export class SchemaService {
  constructor(
    private readonly db: DatabaseService,
    private readonly env: EnvOption,
  ) {}

  /**
   * 检查Schema是否存在
   *
   * @param schemaName - 要检查的Schema名称
   * @returns 返回布尔值表示Schema是否存在
   *
   * @remarks
   * 通过查询information_schema.schemata系统表来检查指定Schema是否存在
   */
  async checkSchemaExistsInDb(schemaName: string): Promise<boolean> {
    const client = await this.db.getTenantDB('system');
    const result = await client`
      SELECT EXISTS (
        SELECT 1 FROM information_schema.schemata 
        WHERE schema_name = ${client(schemaName)}
      );
    `;
    return result[0].exists;
  }

  /**
   * 创建租户Schema
   *
   * @param schema - 要创建的Schema名称
   * @returns 返回创建结果，包含成功标志和可能的错误信息
   *
   * @remarks
   * 创建流程:
   * 1. 首先检查Schema是否已存在
   * 2. 创建新的Schema并添加注释
   * 3. 初始化Schema的表结构
   *
   * @throws
   * 可能抛出的错误:
   * - SCHEMA_ALREADY_EXISTS: Schema已存在
   * - 其他数据库操作错误
   */
  async createTenantSchema(
    schema: string,
  ): Promise<{ success: boolean; error?: string }> {
    try {
      // 1. 检查Schema是否已存在
      const exists = await this.checkSchemaExistsInDb(schema);
      if (exists) {
        return { success: false, error: SchemaError.SCHEMA_ALREADY_EXISTS };
      }

      // 2. 创建Schema并添加注释
      const client = await this.db.getTenantDB('system');
      await client`
        CREATE SCHEMA ${client(schema)};
        
        COMMENT ON SCHEMA ${client(schema)} 
        IS ${client(`Tenant Schema: ${schema}`)};
      `;

      // 3. 初始化Schema结构
      await this.initializeSchemaStructure(schema);

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  /**
   * 初始化Schema的表结构
   *
   * @param schemaName - 要初始化的Schema名称
   * @private
   *
   * @remarks
   * 初始化步骤:
   * 1. 设置搜索路径到指定Schema
   * 2. 创建必要的基础表结构
   *
   * @todo
   * - 完善表结构定义
   * - 添加索引和约束
   * - 添加权限控制
   * - 考虑是否需要添加触发器
   */
  private async initializeSchemaStructure(schemaName: string) {
    const client = await this.db.getTenantDB('system');
    await client`
      SET search_path TO ${client(schemaName)};
      
      -- 创建基础表结构
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
  }
}
