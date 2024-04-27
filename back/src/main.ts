import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const conf = app.get<ConfigService>(ConfigService);
  const host = conf.get('APP_HOST');
  const port = conf.get('APP_PORT');
  await app.listen(port);
  console.log(`-> Air2Java backend listening on: http://${host}:${port}`);
}
bootstrap();
