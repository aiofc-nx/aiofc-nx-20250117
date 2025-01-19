import { Module } from '@nestjs/common';
import { DatabaseService } from './services/database.service';
import { ZodConfigModule } from '../config/zod-config.module';

@Module({
  imports: [ZodConfigModule],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
