import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user.dto';
import { UserStatus } from '../../database/schema/user.schema';
import { ConflictException, NotFoundException } from '@nestjs/common';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  const mockUser = {
    id: '1',
    username: 'testuser',
    display_name: 'Test User',
    tenant_id: 'tenant1',
    status: UserStatus.ACTIVE,
    created_at: new Date(),
    updated_at: new Date(),
  };

  const mockCreateUserDto: CreateUserDto = {
    username: 'testuser',
    password: 'password123',
    display_name: 'Test User',
    tenant_id: 'tenant1',
    status: UserStatus.ACTIVE,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            create: jest.fn().mockResolvedValue(mockUser),
            findMany: jest.fn().mockResolvedValue({
              items: [mockUser],
              total: 1,
              page: 1,
              pageSize: 10,
            }),
            findById: jest.fn().mockResolvedValue(mockUser),
            update: jest.fn().mockResolvedValue(mockUser),
            delete: jest.fn().mockResolvedValue(mockUser),
            deleteMany: jest.fn().mockResolvedValue([mockUser]),
            changePassword: jest.fn().mockResolvedValue(undefined),
            isUsernameExist: jest.fn().mockResolvedValue(false),
          },
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a user', async () => {
      const result = await controller.create(mockCreateUserDto);
      expect(result).toEqual(mockUser);
      expect(service.create).toHaveBeenCalledWith(mockCreateUserDto, true);
    });

    it('should throw ConflictException when username exists', async () => {
      jest
        .spyOn(service, 'create')
        .mockRejectedValueOnce(new ConflictException('用户名已存在'));

      await expect(controller.create(mockCreateUserDto)).rejects.toThrow(
        ConflictException,
      );
    });
  });

  describe('findMany', () => {
    it('should return paginated users', async () => {
      const result = await controller.findMany(1, 10, 'testuser');
      expect(result).toEqual({
        items: [mockUser],
        total: 1,
        page: 1,
        pageSize: 10,
      });
      expect(service.findMany).toHaveBeenCalledWith({
        page: 1,
        pageSize: 10,
        username: 'testuser',
      });
    });

    it('should handle empty results', async () => {
      jest.spyOn(service, 'findMany').mockResolvedValueOnce({
        items: [],
        total: 0,
        page: 1,
        pageSize: 10,
      });

      const result = await controller.findMany(1, 10);
      expect(result.items).toHaveLength(0);
      expect(result.total).toBe(0);
    });

    it('should use default pagination values', async () => {
      await controller.findMany();
      expect(service.findMany).toHaveBeenCalledWith({
        page: undefined,
        pageSize: undefined,
        username: undefined,
      });
    });

    it('should handle invalid page number', async () => {
      await controller.findMany(-1, 10);
      expect(service.findMany).toHaveBeenCalledWith({
        page: -1,
        pageSize: 10,
        username: undefined,
      });
    });

    it('should handle invalid pageSize', async () => {
      await controller.findMany(1, -10);
      expect(service.findMany).toHaveBeenCalledWith({
        page: 1,
        pageSize: -10,
        username: undefined,
      });
    });

    it('should handle large result sets', async () => {
      const largeResultSet = Array(100).fill(mockUser);
      jest.spyOn(service, 'findMany').mockResolvedValueOnce({
        items: largeResultSet,
        total: 1000,
        page: 1,
        pageSize: 100,
      });

      const result = await controller.findMany(1, 100);
      expect(result.items).toHaveLength(100);
      expect(result.total).toBe(1000);
    });
  });

  describe('findById', () => {
    it('should return a user by id', async () => {
      const result = await controller.findById('1');
      expect(result).toEqual(mockUser);
      expect(service.findById).toHaveBeenCalledWith('1');
    });

    it('should return null when user not found', async () => {
      jest.spyOn(service, 'findById').mockResolvedValueOnce(null);
      const result = await controller.findById('999');
      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('should update a user', async () => {
      const updateData = { display_name: 'Updated Name' };
      const result = await controller.update('1', updateData);
      expect(result).toEqual(mockUser);
      expect(service.update).toHaveBeenCalledWith('1', updateData);
    });

    it('should throw NotFoundException when user not found', async () => {
      jest
        .spyOn(service, 'update')
        .mockRejectedValueOnce(new NotFoundException('用户不存在'));

      await expect(
        controller.update('999', { display_name: 'Test' }),
      ).rejects.toThrow(NotFoundException);
    });

    it('should handle empty update data', async () => {
      await expect(controller.update('1', {})).resolves.not.toThrow();
    });

    it('should handle invalid user data', async () => {
      const invalidData = { invalid_field: 'test' };
      await controller.update('1', invalidData as any);
      expect(service.update).toHaveBeenCalledWith('1', invalidData);
    });
  });

  describe('changePassword', () => {
    it('should change user password', async () => {
      await controller.changePassword('1', 'oldpass', 'newpass');
      expect(service.changePassword).toHaveBeenCalledWith(
        '1',
        'oldpass',
        'newpass',
      );
    });

    it('should throw UnauthorizedException when old password is incorrect', async () => {
      jest
        .spyOn(service, 'changePassword')
        .mockRejectedValueOnce(new Error('密码错误'));

      await expect(
        controller.changePassword('1', 'wrongpass', 'newpass'),
      ).rejects.toThrow();
    });

    it('should validate password requirements', async () => {
      jest
        .spyOn(service, 'changePassword')
        .mockRejectedValueOnce(new Error('密码不符合要求'));

      await expect(
        controller.changePassword('1', 'old', 'weak'),
      ).rejects.toThrow();
    });

    it('should handle same old and new password', async () => {
      jest
        .spyOn(service, 'changePassword')
        .mockRejectedValueOnce(new Error('新密码不能与旧密码相同'));

      await expect(
        controller.changePassword('1', 'same', 'same'),
      ).rejects.toThrow();
    });
  });

  describe('delete', () => {
    it('should delete a user', async () => {
      const result = await controller.delete('1');
      expect(result).toEqual(mockUser);
      expect(service.delete).toHaveBeenCalledWith('1');
    });

    it('should handle already deleted user', async () => {
      jest.spyOn(service, 'delete').mockResolvedValueOnce(null);
      const result = await controller.delete('1');
      expect(result).toBeNull();
    });

    it('should handle invalid user id format', async () => {
      jest
        .spyOn(service, 'delete')
        .mockRejectedValueOnce(new Error('Invalid ID'));
      await expect(controller.delete('invalid-id')).rejects.toThrow();
    });
  });

  describe('deleteMany', () => {
    it('should delete multiple users', async () => {
      const result = await controller.deleteMany(['1', '2']);
      expect(result).toEqual([mockUser]);
      expect(service.deleteMany).toHaveBeenCalledWith(['1', '2']);
    });

    it('should handle empty input array', async () => {
      jest.spyOn(service, 'deleteMany').mockResolvedValueOnce([]);
      const result = await controller.deleteMany([]);
      expect(result).toEqual([]);
    });
  });

  describe('checkUsername', () => {
    it('should check if username exists', async () => {
      const result = await controller.checkUsername('testuser', '1');
      expect(result).toBeFalsy();
      expect(service.isUsernameExist).toHaveBeenCalledWith('testuser', '1');
    });

    it('should return true when username exists', async () => {
      jest.spyOn(service, 'isUsernameExist').mockResolvedValueOnce(true);
      const result = await controller.checkUsername('existing', '1');
      expect(result).toBeTruthy();
    });
  });
});
