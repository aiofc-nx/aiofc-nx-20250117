import { z } from 'zod';
import { ZodEnv } from './zod-env';
import { booleanAsString, stringNumber } from './z-utils';
import { join } from 'path';
import * as fs from 'fs';

describe('ZodEnv', () => {
  const testConfigDir = join(__dirname, 'test-configs');
  const testConfigPath = join(testConfigDir, 'config.test.yaml');

  // 创建测试配置文件
  beforeAll(() => {
    process.env['NODE_ENV'] = 'test';

    if (!fs.existsSync(testConfigDir)) {
      fs.mkdirSync(testConfigDir, { recursive: true });
    }

    const testConfig = `
port: 3000
host: localhost
debug: 'true'
timeout: '5000'
database:
  url: mongodb://localhost:27017
    `;

    fs.writeFileSync(testConfigPath, testConfig);
  });

  // 清理测试配置文件
  afterAll(() => {
    if (fs.existsSync(testConfigPath)) {
      fs.unlinkSync(testConfigPath);
    }
    if (fs.existsSync(testConfigDir)) {
      fs.rmSync(testConfigDir, { recursive: true, force: true });
    }
  });

  it('should load and validate config correctly', () => {
    const schema = z.object({
      port: z.number(),
      host: z.string(),
      debug: booleanAsString(),
      timeout: stringNumber(3000),
      database: z.object({
        url: z.string(),
      }),
    });

    const env = new ZodEnv(schema, {
      configDir: testConfigDir,
      configFilePrefix: 'config',
    });

    const config = env.config;

    expect(config.port).toBe(3000);
    expect(config.host).toBe('localhost');
    expect(config.debug).toBe(true);
    expect(config.timeout).toBe(5000);
    expect(config.database.url).toBe('mongodb://localhost:27017');
  });
});

describe('Utility Functions', () => {
  describe('booleanAsString', () => {
    const schema = booleanAsString();

    it('should handle string boolean values', async () => {
      expect(await schema.parseAsync('true')).toBe(true);
      expect(await schema.parseAsync('false')).toBe(false);
      expect(await schema.parseAsync('')).toBe(false);
    });

    it('should handle actual boolean values', async () => {
      expect(await schema.parseAsync(true)).toBe(true);
      expect(await schema.parseAsync(false)).toBe(false);
    });

    it('should handle null/undefined', async () => {
      expect(await schema.parseAsync(null)).toBe(false);
      expect(await schema.parseAsync(undefined)).toBe(false);
    });
  });

  describe('stringNumber', () => {
    const schema = stringNumber(100);

    it('should convert string numbers', async () => {
      expect(await schema.parseAsync('42')).toBe(42);
      expect(await schema.parseAsync('3.14')).toBe(3.14);
    });

    it('should handle actual numbers', async () => {
      expect(await schema.parseAsync(42)).toBe(42);
      expect(await schema.parseAsync(3.14)).toBe(3.14);
    });

    it('should use default value for empty/invalid inputs', async () => {
      expect(await schema.parseAsync('')).toBe(100);
      expect(await schema.parseAsync(null)).toBe(100);
      expect(await schema.parseAsync(undefined)).toBe(100);
    });
  });
});
