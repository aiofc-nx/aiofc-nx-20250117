import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  ParseArrayPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('用户管理')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: '创建用户' })
  async create(@Body() data: CreateUserDto) {
    return this.usersService.create(data, true);
  }

  @Get()
  @ApiOperation({ summary: '查询用户列表' })
  async findMany(
    @Query('page') page?: number,
    @Query('pageSize') pageSize?: number,
    @Query('username') username?: string,
  ) {
    return this.usersService.findMany({ page, pageSize, username });
  }

  @Get(':id')
  @ApiOperation({ summary: '查询用户详情' })
  async findById(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: '更新用户信息' })
  async update(@Param('id') id: string, @Body() data: Partial<CreateUserDto>) {
    return this.usersService.update(id, data);
  }

  @Put(':id/password')
  @ApiOperation({ summary: '修改密码' })
  async changePassword(
    @Param('id') id: string,
    @Body('oldPassword') oldPassword: string,
    @Body('newPassword') newPassword: string,
  ) {
    return this.usersService.changePassword(id, oldPassword, newPassword);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除用户' })
  async delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }

  @Delete()
  @ApiOperation({ summary: '批量删除用户' })
  async deleteMany(@Body('ids', new ParseArrayPipe()) ids: string[]) {
    return this.usersService.deleteMany(ids);
  }

  @Get('check-username')
  @ApiOperation({ summary: '检查用户名是否存在' })
  async checkUsername(
    @Query('username') username: string,
    @Query('excludeId') excludeId?: string,
  ) {
    return this.usersService.isUsernameExist(username, excludeId);
  }
}
