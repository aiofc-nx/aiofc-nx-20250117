import { Test, TestingModule } from '@nestjs/testing';
import { I18nService, I18nContext } from 'nestjs-i18n';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;
  let i18n: I18nContext;

  beforeAll(async () => {
    const mockI18n = {
      t: jest.fn().mockReturnValue('Hello API'),
      lang: 'en',
      service: {
        getSupportedLanguages: jest.fn().mockReturnValue(['en', 'zh']),
        getTranslations: jest
          .fn()
          .mockReturnValue({ test: { HELLO: 'Hello API' } }),
      } as unknown as I18nService,
      id: '1',
      i18n: {} as I18nService,
    };

    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        {
          provide: I18nService,
          useValue: mockI18n,
        },
      ],
    }).compile();

    i18n = app.get<I18nContext>(I18nService);
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getData(i18n)).toBe('Hello API');
    });
  });
});
