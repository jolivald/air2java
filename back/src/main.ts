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
  app.disable('x-powered-by');
  app.use(cookieParser());
  app.enableCors({
    // TODO: set strict cors origin policy
    origin: 'http://localhost:5173',
    credentials: true
    //methods: 'GET, PUT, POST, DELETE', 
    //allowedHeaders: 'Content-Type, Authorization',
  });
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(port);
  console.log(`-> Air2Java backend listening on: http://${host}:${port}`);
}
bootstrap();
