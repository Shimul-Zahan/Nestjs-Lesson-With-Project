import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    // for validation more secure
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true, //for create dto instatnce
  })); 
  await app.listen(3000);
}
bootstrap();
