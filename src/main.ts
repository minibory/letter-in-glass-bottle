import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ValidationPipe} from "@nestjs/common";
import {ConfigService} from "@nestjs/config";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  const configService = app.get(ConfigService);

  const swaggerConfig = new DocumentBuilder()
      .setTitle("message-in-a-bottle API Document")
      .setDescription("message-in-a-bottle API Document")
      .setVersion("1.0.0")
      .build();

  const swaggerDocs = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup("api", app, swaggerDocs);

  const port = configService.get('PORT');
  await app.listen(port);

  console.log('');
  console.log('Application started on port(s): ' + port + ' (http) with context path \'\'');
  console.log('Completed initialization in 0 ms');
}
bootstrap();
