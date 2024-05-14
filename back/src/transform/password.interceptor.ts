import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PasswordInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(map(this.removePasswordProperty.bind(this)));
  }

  private removePasswordProperty(response) {
    const data = response.data || response;
    if (Array.isArray(data)){
      data.map(this.removePasswordProperty);
    } else {
      delete data.password;
    }
    return response;
  }
}
