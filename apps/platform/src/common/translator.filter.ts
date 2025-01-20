import {
  Injectable,
  ExceptionFilter,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { TranslatorService } from './translator.service';

@Injectable()
export class TranslatorFilter implements ExceptionFilter {
  constructor(private translator: TranslatorService) {}
  catch(exception: HttpException | any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();

    let status = HttpStatus.BAD_REQUEST;
    let message: string | string[] | any = exception.message;
    try {
      status = exception.getStatus();
    } catch (_e) {
      console.warn('Failed to get status from exception');
    }

    try {
      if (exception.response) {
        if (exception.response.message) {
          message = exception.response.message;
        }
        if (exception.respone.statusCode) {
          status = exception.respone.statusCode;
        }
      }
    } catch (_e) {
      console.warn('Failed to process exception response');
    }

    let langKey;
    let selectedLanguage;
    if (this.translator._keyExtractor) {
      try {
        langKey = this.translator._keyExtractor(req);
      } catch (_e) {
        console.warn('Failed to extract language key from request');
      }
    }
    if (typeof langKey == 'string') {
      const langs: string[] = this.translator.getLangs();
      if (langs.indexOf(langKey) > -1) {
        selectedLanguage = langKey;
      }
    }

    const translationOptions = selectedLanguage
      ? { lang: selectedLanguage }
      : {};
    if (Array.isArray(message)) {
      message = message.map((t) => {
        return this.translator.translate(t, translationOptions);
      });
    } else if (typeof message == 'string') {
      message = this.translator.translate(message, translationOptions);
    }

    response.status(status).json({
      statusCode: status,
      message,
    });
  }
}
