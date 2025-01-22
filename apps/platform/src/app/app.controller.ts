import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { I18n, I18nContext } from 'nestjs-i18n';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(@I18n() i18n: I18nContext) {
    console.log('Current language:', i18n.lang);
    console.log('Available languages:', i18n.service.getSupportedLanguages());
    console.log('Translation keys:', i18n.service.getTranslations());

    return i18n.t('test.HELLO');
  }
}
