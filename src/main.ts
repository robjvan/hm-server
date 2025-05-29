import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /// Add global prefix to all endpoints
  app.setGlobalPrefix('api/v1');

  /// Handle all user input validation globally
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  // Set Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('LeafAlert Platform')
    .setDescription('LeafAlert platform API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
