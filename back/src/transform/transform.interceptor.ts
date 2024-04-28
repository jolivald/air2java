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
    //console.log('transform', data);
    return Object.entries(data).reduce(
      (acc, [key, value]) =>
        Object.assign(acc, { [key.split(/[A-Z]/)[0]]: value }),
      {},
    );
  }
}
