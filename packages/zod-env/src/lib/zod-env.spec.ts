import { z } from 'zod';
import { join } from 'path';
import * as fs from 'fs';
import { loadYamlEnvOptions } from './z-yaml-loader';

describe('loadYamlEnvOptions', () => {
  const testConfigDir = join(__dirname, 'test-configs');
  const testConfigPath = join(testConfigDir, 'config.test.yaml');

  // 定义测试用的 schema
  const testSchema = z.object({
    server: z.object({
      port: z.coerce.number().default(3000),
      globalPrefix: z.string().default('api'),
    }),
    database: z.object({
      user: z.string(),
      password: z.string(),
      host: z.string(),
      port: z.coerce.number(),
      name: z.string(),
      schema: z.string(),
      pool: z.object({
        max: z.coerce.number().default(20),
        min: z.coerce.number().default(0),
      }),
    }),
    logger: z.object({
      trackingIdHeader: z.string().optional(),
    }),
  });

  beforeAll(() => {
    // 设置测试环境
    process.env['NODE_ENV'] = 'test';

    // 创建测试配置目录
    if (!fs.existsSync(testConfigDir)) {
      fs.mkdirSync(testConfigDir, { recursive: true });
    }

    // 创建测试配置文件
    const testConfig = `
server:
  port: 3000
  globalPrefix: api
database:
  user: postgres
  password: postgres
  host: localhost
  port: 5438
  name: aiofc_db
  schema: aiofc
  pool:
    max: 20
    min: 2
logger:
  trackingIdHeader: x-tracking-id`;

    fs.writeFileSync(testConfigPath, testConfig);
  });

  afterAll(() => {
    // 清理测试文件和目录
    if (fs.existsSync(testConfigPath)) {
      fs.unlinkSync(testConfigPath);
    }
    if (fs.existsSync(testConfigDir)) {
      fs.rmdirSync(testConfigDir);
    }
  });

  it('should load and validate config correctly', () => {
    const config = loadYamlEnvOptions(
      {
        configDir: testConfigDir,
        configFilePrefix: 'config',
      },
      testSchema,
    );

    expect(config).toBeDefined();
    expect(config.server.port).toBe(3000);
    expect(config.server.globalPrefix).toBe('api');
    expect(config.database.host).toBe('localhost');
    expect(config.database.pool.max).toBe(20);
    expect(config.database.pool.min).toBe(2);
    expect(config.logger.trackingIdHeader).toBe('x-tracking-id');
  });

  it('should use default values when not provided', () => {
    // 创建最小配置文件，仅包含必需字段
    const minimalConfig = `
database:
  user: postgres
  password: postgres
  host: localhost
  port: 5438
  name: aiofc_db
  schema: aiofc
  pool:
    max: 20
    min: 2

server:
  port: 3000
  globalPrefix: api

logger:
  trackingIdHeader: x-tracking-id
`;

    fs.writeFileSync(testConfigPath, minimalConfig);

    const config = loadYamlEnvOptions(
      {
        configDir: testConfigDir,
        configFilePrefix: 'config',
      },
      testSchema,
    );

    // 验证配置值
    expect(config.server.port).toBe(3000);
    expect(config.server.globalPrefix).toBe('api');
    expect(config.database.user).toBe('postgres');
    expect(config.database.port).toBe(5438);
    expect(config.database.pool.max).toBe(20);
    expect(config.database.pool.min).toBe(2);
    expect(config.logger.trackingIdHeader).toBe('x-tracking-id');
  });

  it('should throw error when required field is missing', () => {
    // 创建缺少必需字段的配置
    const invalidConfig = `
server:
  port: 3000
  host: localhost
database:
  url: mongodb://localhost:27017`;

    fs.writeFileSync(testConfigPath, invalidConfig);

    expect(() =>
      loadYamlEnvOptions(
        {
          configDir: testConfigDir,
          configFilePrefix: 'config',
        },
        testSchema,
      ),
    ).toThrow();
  });

  it('should throw error when config file does not exist', () => {
    expect(() =>
      loadYamlEnvOptions(
        {
          configDir: '/non/existent/path',
          configFilePrefix: 'config',
        },
        testSchema,
      ),
    ).toThrow();
  });
});
