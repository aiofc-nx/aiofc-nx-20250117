import {
  Injectable,
  ConflictException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { userTable, User } from '../../database/schema/user.schema';
import { CreateUserDto } from './dto/user.dto';
import { eq, like, desc, inArray, ne } from 'drizzle-orm';
import { hash, compare } from 'bcrypt';
import { TenantContextService } from '../../database/services/tenant-context.service';
import { WithTenant } from '../../common/decorators/with-tenant.decorator';
import { DatabaseService } from '../../database/services/database.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly db: DatabaseService,
    protected readonly tenantContext: TenantContextService,
  ) {}

  /**
   * 创建新用户
   */
  async create(data: CreateUserDto, hashPassword = true) {
    const client = await this.db.getTenantDB(data.tenant_id);

    // 检查用户名是否已存在
    const existingUser = await client
      .select()
      .from(userTable)
      .where(eq(userTable.username, data.username))
      .limit(1);

    if (existingUser.length > 0) {
      throw new ConflictException('用户名已存在');
    }

    // 密码加密
    const hashedPassword = hashPassword
      ? await hash(data.password, 10)
      : data.password;

    // 创建用户
    const [user] = await client
      .insert(userTable)
      .values({
        ...data,
        password: hashedPassword,
        tenant_id: data.tenant_id,
      })
      .returning();

    return user;
  }

  @WithTenant()
  async findById(id: string) {
    const [user] = await this.db.query
      .select()
      .from(userTable)
      .where(eq(userTable.id, id));
    return user;
  }

  /**
   * 查询用户列表
   * @param params 查询参数（分页、筛选条件等）
   */
  @WithTenant()
  async findMany(params: {
    page?: number;
    pageSize?: number;
    username?: string;
  }) {
    const { page = 1, pageSize = 10, username } = params;
    let query = this.db.query.select().from(userTable);

    if (username) {
      query = query.where(like(userTable.username, `%${username}%`));
    }

    const total = await query.count();
    const users = await query
      .limit(pageSize)
      .offset((page - 1) * pageSize)
      .orderBy(desc(userTable.createdAt));

    return {
      items: users,
      total: Number(total[0].count),
      page,
      pageSize,
    };
  }

  /**
   * 更新用户信息
   */
  @WithTenant()
  async update(id: string, data: Partial<Omit<User, 'id' | 'password'>>) {
    const [user] = await this.db.query
      .update(userTable)
      .set(data)
      .where(eq(userTable.id, id))
      .returning();
    return user;
  }

  /**
   * 修改密码
   */
  @WithTenant()
  async changePassword(id: string, oldPassword: string, newPassword: string) {
    const [user] = await this.db.query
      .select()
      .from(userTable)
      .where(eq(userTable.id, id));

    if (!user) {
      throw new NotFoundException('用户不存在');
    }

    const isPasswordValid = await compare(oldPassword, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('原密码错误');
    }

    const hashedPassword = await hash(newPassword, 10);
    await this.db.query
      .update(userTable)
      .set({ password: hashedPassword })
      .where(eq(userTable.id, id));
  }

  /**
   * 删除用户
   */
  @WithTenant()
  async delete(id: string) {
    const [user] = await this.db.query
      .delete(userTable)
      .where(eq(userTable.id, id))
      .returning();
    return user;
  }

  /**
   * 验证用户凭据
   * @param username 用户名
   * @param password 密码
   */
  @WithTenant()
  async validateUser(username: string, password: string) {
    const [user] = await this.db.query
      .select()
      .from(userTable)
      .where(eq(userTable.username, username));

    if (!user) {
      throw new NotFoundException('用户不存在');
    }

    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('密码错误');
    }

    const { password: _, ...result } = user;
    return result;
  }

  /**
   * 批量删除用户
   * @param ids 用户ID数组
   */
  @WithTenant()
  async deleteMany(ids: string[]) {
    const users = await this.db.query
      .delete(userTable)
      .where(inArray(userTable.id, ids))
      .returning();
    return users;
  }

  /**
   * 检查用户名是否已存在
   * @param username 用户名
   * @param excludeId 排除的用户ID（用于更新时检查）
   */
  @WithTenant()
  async isUsernameExist(username: string, excludeId?: string) {
    const query = this.db.query
      .select()
      .from(userTable)
      .where(eq(userTable.username, username));

    if (excludeId) {
      query.where(ne(userTable.id, excludeId));
    }

    const [user] = await query;
    return !!user;
  }
}
