import { IsString, IsOptional, IsEmail, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserStatus } from '../../../database/schema/user.schema';

export class CreateUserDto {
  @ApiProperty({ description: '租户ID' })
  @IsString()
  tenant_id: string;

  @ApiProperty({ description: '用户名' })
  @IsString()
  username: string;

  @ApiProperty({ description: '密码' })
  @IsString()
  password: string;

  @ApiProperty({ description: '显示名称' })
  @IsString()
  display_name: string;

  @ApiProperty({ description: '邮箱', required: false })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({ description: '手机号', required: false })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiProperty({ description: '头像', required: false })
  @IsString()
  @IsOptional()
  avatar?: string;

  @ApiProperty({ description: '状态', enum: UserStatus })
  @IsEnum(UserStatus)
  status: UserStatus;

  @ApiProperty({ description: '部门ID', required: false })
  @IsString()
  @IsOptional()
  department_id?: string;

  @ApiProperty({ description: '职位', required: false })
  @IsString()
  @IsOptional()
  position?: string;

  @ApiProperty({ description: '备注', required: false })
  @IsString()
  @IsOptional()
  remarks?: string;
}
