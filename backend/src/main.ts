import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  MongoExceptionFilter,
  HttpExceptionFilter,
  AllExceptionsFilter,
} from './exception.filter';
import { ValidatorOptions } from 'class-validator';
import {
  ValidationError,
  ValidationPipe,
  VersioningType,
} from '@nestjs/common';

export interface ValidationPipeOptions extends ValidatorOptions {
  transform?: true;
  disableErrorMessages?: false;
  exceptionFactory?: (errors: ValidationError[]) => any;
}

declare module 'express' {
  export interface Request {
    user: any;
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionsFilter());
  app.enableCors({ origin: '*' }); //restrict the url to domain
  app.useGlobalFilters(new MongoExceptionFilter());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
    prefix: 'api/v',
  });
  const PORT = process.env.PORT || 8080;
  await app.listen(PORT);
}
bootstrap();
