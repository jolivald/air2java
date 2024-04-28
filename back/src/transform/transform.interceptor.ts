import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    //return next.handle().pipe(map((data) => ({ data })));
    return next.handle().pipe(map(this.sanitizeResponseProperties));
  }

  private sanitizeResponseProperties(data) {
    return Object.entries(data).reduce(
      (acc, [key, value]) =>
        Object.assign(acc, { [key.slice(0, key.search(/[A-Z]/))]: value }),
      {},
    );
  }
}
