import { Inject, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import ReplaceStr from '../utils/replace-string';

@Injectable()
export class TranslatorService {
  public readonly _keyExtractor: (req) => string | undefined;
  constructor(
    @Inject('DEFAULT_TRANSLATION_LANGUAGE') private defaultLanguage: string,
    @Inject('TRANSLATION_SOURCE') private readonly default_source: string,
    @Inject('TRANSLATOR_REQUEST_KEY_EXTRACTOR')
    private readonly keyExtractor: (req) => string,
  ) {
    this.findLangs();
    if (keyExtractor) this._keyExtractor = keyExtractor;
  }

  private langs: { [lang: string]: object } = {};

  getLangs(): string[] {
    return Object.keys(this.langs);
  }

  private getSourceFolderPath() {
    return path.join(__dirname, '../../', this.default_source);
  }

  private findLangs() {
    const source = this.getSourceFolderPath();
    const folders = fs.readdirSync(source);

    folders.forEach((langFolder) => {
      try {
        const currentLangFolder = path.join(source, '/', langFolder);

        const files = fs.readdirSync(currentLangFolder);
        files.forEach((langFile) => {
          const currentLangFile = path.join(currentLangFolder, langFile);

          try {
            const content = JSON.parse(
              fs.readFileSync(currentLangFile, { encoding: 'utf8' }),
            );

            if (content) {
              this.langs[langFolder] = {
                ...this.langs[langFolder],
                ...content,
              };
            }
          } catch (_e) {
            throw new Error(
              `Error on reading translation file : ${currentLangFile}\nThe file should be JSON format.`,
            );
          }
        });
      } catch (e) {
        console.warn(`Failed to process language folder: ${e.message}`);
      }
    });
  }

  translate(
    key: string,
    options?: {
      replace?: { [key: string]: string };
      lang?: string;
    },
  ) {
    let lang = this.defaultLanguage;
    if (options && options.lang) {
      if (Object.prototype.hasOwnProperty.call(this.langs, options.lang)) {
        lang = options.lang;
      } else {
        throw new Error(
          `Language "${options.lang}" not founded for key : "${key}"`,
        );
      }
    }

    let replaceKeys = [];
    if (options && options.replace && typeof options.replace == 'object') {
      replaceKeys = Object.keys(options.replace);
    }

    let msg = key;
    if (Object.prototype.hasOwnProperty.call(this.langs[lang], key)) {
      msg = this.langs[lang][key];
    }

    replaceKeys.forEach((key) => {
      const value = options.replace[key];
      msg = ReplaceStr(msg, '${' + key + '}', value);
    });

    return msg;
  }
}
