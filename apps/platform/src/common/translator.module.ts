import { Module, DynamicModule } from '@nestjs/common';
import { Request } from 'express';
import { TranslatorService } from './translator.service';

interface TranslatorModuleOptionsInterface {
  defaultLang?: string;
  translationSource?: string;
  global?: boolean;
  requestKeyExtractor?: (req: Request | any) => string;
}

@Module({})
export class TranslatorModule {
  static forRoot(options: TranslatorModuleOptionsInterface): DynamicModule {
    let global = false;
    if (Object.prototype.hasOwnProperty.call(options, 'global'))
      global = options.global;

    let defaultLang = 'en';
    if (Object.prototype.hasOwnProperty.call(options, 'defaultLang'))
      defaultLang = options.defaultLang;

    let translationSource = '/src/i18n';
    if (Object.prototype.hasOwnProperty.call(options, 'translationSource'))
      translationSource = options.translationSource;

    let requestKeyExtractor: any = () => defaultLang;
    if (Object.prototype.hasOwnProperty.call(options, 'requestKeyExtractor'))
      requestKeyExtractor = options.requestKeyExtractor;

    const Module = {
      global,
      module: TranslatorModule,
      providers: [
        {
          provide: 'DEFAULT_TRANSLATION_LANGUAGE',
          useValue: defaultLang,
        },
        {
          provide: 'TRANSLATION_SOURCE',
          useValue: translationSource,
        },
        {
          provide: 'TRANSLATOR_REQUEST_KEY_EXTRACTOR',
          useValue: requestKeyExtractor,
        },
        TranslatorService,
      ],
      exports: [TranslatorService],
    };
    return Module;
  }
}
