import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await app.listen(3000);
  await app.listen(3001, () => console.log(`server started on port 3000`));
}
bootstrap();
