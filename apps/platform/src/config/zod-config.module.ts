import { Global, Module } from '@nestjs/common';
import { EnvService } from './env.service';

/**
 * ZodConfigModule
 *
 * 职责：
 * 1. 提供全局配置服务
 * 2. 管理配置的加载和注入
 * 3. 确保配置的单例性
 */
@Global()
@Module({
  providers: [EnvService],
  exports: [EnvService],
})
export class ZodConfigModule {}
