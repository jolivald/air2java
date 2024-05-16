import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import { TransformInterceptor } from './transform/transform.interceptor';
import * as cookieParser from 'cookie-parser';
import * as fs from 'fs';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('./src/cert/dev-key.pem'),
    cert: fs.readFileSync('./src/cert/dev-cert.pem'),
  };
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    { httpsOptions }, 
  );
  const conf = app.get<ConfigService>(ConfigService);
  const host = conf.get('APP_HOST');
  const port = conf.get('APP_PORT');
  app.disable('x-powered-by');
  app.use(cookieParser());
  app.enableCors({
    origin: 'https://127.0.0.1:5173',
    credentials: true,
    allowedHeaders: 'Content-Type, Authorization, credentials, Cookie, range',
    methods: 'GET, PUT, PATCH, POST, DELETE, HEAD, OPTIONS'
  });
  // app.useGlobalInterceptors(new TransformInterceptor());

  const config = new DocumentBuilder()
    .setTitle('Air de Java')
    .setDescription('API documentation')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  console.log(`-> Air2Java backend listening on: https://${host}:${port}`);
}
bootstrap();
