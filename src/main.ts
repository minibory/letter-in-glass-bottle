import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ValidationPipe} from "@nestjs/common";
import {ConfigService} from "@nestjs/config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  await app.listen(port);

  console.log('');
  console.log('Application started on port(s): ' + port + ' (http) with context path \'\'');
  console.log('Completed initialization in 0 ms');
}
bootstrap();
