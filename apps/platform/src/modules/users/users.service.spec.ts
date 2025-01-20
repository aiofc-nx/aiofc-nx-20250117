jest.mock('bcrypt', () => ({
  compare: jest.fn().mockResolvedValue(true),
  hash: jest.fn().mockResolvedValue('hashedpassword'),
}));

import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { DatabaseService } from '../../database/services/database.service';
import { TenantContextService } from '../../database/services/tenant-context.service';
import { CreateUserDto } from './dto/user.dto';
import { UserStatus } from '../../database/schema/user.schema';
import { ConflictException, NotFoundException } from '@nestjs/common';

describe('UsersService', () => {
  let service: UsersService;
  let dbService: DatabaseService;
  let _tenantContext: TenantContextService;

  const mockUser = {
    id: '1',
    username: 'testuser',
    password: 'hashedpassword',
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
      providers: [
        UsersService,
        {
          provide: DatabaseService,
          useValue: {
            query: {
              select: jest.fn(),
              insert: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
            },
            getTenantDB: jest.fn(),
          },
        },
        {
          provide: TenantContextService,
          useValue: {
            getTenantId: jest.fn().mockReturnValue('tenant1'),
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    dbService = module.get<DatabaseService>(DatabaseService);
    _tenantContext = module.get<TenantContextService>(TenantContextService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new user successfully', async () => {
      const mockTenantDB = {
        select: jest.fn().mockReturnValue({
          from: jest.fn().mockReturnValue({
            where: jest.fn().mockReturnValue({
              limit: jest.fn().mockResolvedValue([]),
            }),
          }),
        }),
        insert: jest.fn().mockReturnValue({
          values: jest.fn().mockReturnValue({
            returning: jest.fn().mockResolvedValue([mockUser]),
          }),
        }),
      };

      jest
        .spyOn(dbService, 'getTenantDB')
        .mockResolvedValue(mockTenantDB as any);

      const result = await service.create(mockCreateUserDto);
      expect(result).toEqual(mockUser);
    });

    it('should throw ConflictException if username exists', async () => {
      const mockTenantDB = {
        select: jest.fn().mockReturnValue({
          from: jest.fn().mockReturnValue({
            where: jest.fn().mockReturnValue({
              limit: jest.fn().mockResolvedValue([mockUser]),
            }),
          }),
        }),
      };

      jest
        .spyOn(dbService, 'getTenantDB')
        .mockResolvedValue(mockTenantDB as any);

      await expect(service.create(mockCreateUserDto)).rejects.toThrow(
        ConflictException,
      );
    });
  });

  describe('findById', () => {
    it('should return a user by id', async () => {
      jest.spyOn(dbService.query, 'select').mockReturnValue({
        from: jest.fn().mockReturnValue({
          where: jest.fn().mockResolvedValue([mockUser]),
        }),
      } as any);

      const result = await service.findById('1');
      expect(result).toEqual(mockUser);
    });
  });

  describe('changePassword', () => {
    it('should change password successfully', async () => {
      jest.spyOn(dbService.query, 'select').mockReturnValue({
        from: jest.fn().mockReturnValue({
          where: jest.fn().mockResolvedValue([mockUser]),
        }),
      } as any);

      jest.spyOn(dbService.query, 'update').mockReturnValue({
        set: jest.fn().mockReturnValue({
          where: jest.fn().mockResolvedValue([mockUser]),
        }),
      } as any);

      await expect(
        service.changePassword('1', 'oldpassword', 'newpassword'),
      ).resolves.not.toThrow();
    });

    it('should throw NotFoundException if user not found', async () => {
      jest.spyOn(dbService.query, 'select').mockReturnValue({
        from: jest.fn().mockReturnValue({
          where: jest.fn().mockResolvedValue([]),
        }),
      } as any);

      await expect(
        service.changePassword('1', 'oldpassword', 'newpassword'),
      ).rejects.toThrow(NotFoundException);
    });
  });
});
