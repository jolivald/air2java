import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.info(`[${req.method}] ${req.originalUrl}`);
    // console.log(JSON.stringify(req.headers));
    // console.log(JSON.stringify(req.body));
    next();
  }
}
