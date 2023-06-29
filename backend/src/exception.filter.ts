import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  HttpException,
  InternalServerErrorException,
} from '@nestjs/common';

import { Response } from 'express';
import { MongoError } from 'mongodb';

// error name = MongoServerError
@Catch(MongoError)
export class MongoExceptionFilter implements ExceptionFilter {
  catch(exception: MongoError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.code;

    switch (status) {
      case 11000:
        const err = exception as unknown as { keyPattern: string };
        return response.status(HttpStatus.CONFLICT).json({
          statusCode: HttpStatus.CONFLICT,
          message: `${Object.keys(err.keyPattern)[0]} already exist`,
          timestamp: new Date().toISOString(),
        });
      default:
        return response.status(HttpStatus.CONFLICT).json({
          statusCode: HttpStatus.CONFLICT,
          message: `already exist`,
          timestamp: new Date().toISOString(),
        });
    }
  }
}

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const error = exception.getResponse() as {
      message: string;
      status: string;
    };

    return response.status(status).json({
      statusCode: status,
      message: Array.isArray(error?.message)
        ? error?.message[0]
        : error?.message,
      timestamp: new Date().toISOString(),
    });
  }
}

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: InternalServerErrorException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    if (exception?.name == 'ValidationError') {
      return response.status(422).json({
        statusCode: 422,
        message: exception.message,
        timestamp: new Date().toISOString(),
      });
    } else {
      return response.status(status).json({
        statusCode: status,
        message: exception.message,
        timestamp: new Date().toISOString(),
      });
    }
  }
}
