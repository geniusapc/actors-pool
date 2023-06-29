import { Response } from 'express';

export class ResponseDTO {
  statusCode: number;
  message: string;
  data: any;
  timestamp: string;

  constructor(statusCode: number, message: string, data: any) {
    this.statusCode = statusCode;
    this.message = message;
    this.timestamp = new Date().toISOString();
    this.data = data;
  }

  send(res: Response) {
    return res.status(this.statusCode).json(this);
  }
}
