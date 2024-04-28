import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { TransformInterceptor } from './transform/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const conf = app.get<ConfigService>(ConfigService);
  const host = conf.get('APP_HOST');
  const port = conf.get('APP_PORT');
  app.disable('x-powered-by');
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(port);
  console.log(`-> Air2Java backend listening on: http://${host}:${port}`);
}
bootstrap();
