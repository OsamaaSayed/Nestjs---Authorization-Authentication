import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() { // Launching Function
  const app = await NestFactory.create(AppModule); // AppModule is the parent module
  await app.listen(3000); // 3000 is the port for our server
}
bootstrap();
