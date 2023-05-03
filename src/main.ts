import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MongoExceptionFilter, HttpExceptionFilter } from './exception.filter';
import { ValidatorOptions } from 'class-validator';
import { ValidationError, ValidationPipe } from '@nestjs/common';

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
  app.useGlobalFilters(new MongoExceptionFilter());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(3000);
}
bootstrap();
