import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import * as fs from 'fs';
import { AppLogger } from './logger/app.logger.service';

const logger = new AppLogger();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger setup
  const config = new DocumentBuilder()
    .setDescription('API contract for the banking application')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  // Save OpenAPI spec as JSON
  fs.writeFileSync('./openapi.json', JSON.stringify(document, null, 2));

  SwaggerModule.setup('api-docs', app, document);

  // Enable validation globally
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      exceptionFactory: (errors) => {
        const errorMessages = errors.map(
          (err) =>
            `${err.property} - ${Object.values(err.constraints).join(', ')}`,
        );
        logger.error(`Validation failed: ${errorMessages.join('; ')}`);
        throw new BadRequestException('Validation error');
      },
    }),
  );

  await app.listen(3000);
}
bootstrap();
