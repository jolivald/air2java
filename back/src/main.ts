import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { TransformInterceptor } from './transform/transform.interceptor';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const conf = app.get<ConfigService>(ConfigService);
  const host = conf.get('APP_HOST');
  const port = conf.get('APP_PORT');
  app.use(cookieParser());
  app.useGlobalInterceptors(new TransformInterceptor());
  app.disable('x-powered-by');
  await app.listen(port);
  console.log(`-> Air2Java backend listening on: http://${host}:${port}`);
}
bootstrap();
