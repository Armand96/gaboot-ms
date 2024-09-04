import { NestFactory } from '@nestjs/core';
import { BuyerServiceModule } from './buyer-service.module';

async function bootstrap() {
  const app = await NestFactory.create(BuyerServiceModule);
  await app.listen(3003);
}
bootstrap();
