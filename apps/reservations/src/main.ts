import { NestFactory } from '@nestjs/core';

import { ReservationsModule } from 'apps/reservations/src/reservations.module';

async function bootstrap() {
  const app = await NestFactory.create(ReservationsModule);
  await app.listen(3000);
}
bootstrap();
