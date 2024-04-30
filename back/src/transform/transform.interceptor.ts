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
    return next.handle().pipe(map(this.transformProperties.bind(this)));
  }

  private transformProperties(data) {
    if (Array.isArray(data)){
      return data.map(this.transformProperties);
    }
    return data == null || typeof data !== 'object'
      ? data
      : Object.entries(data).reduce(
        (acc, [key, value]) =>
          Object.assign(acc, { [key.split(/[A-Z]/)[0]]: value }),
        {},
      );
  }
}
