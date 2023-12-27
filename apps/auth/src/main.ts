import { NestFactory } from '@nestjs/core';

import { AuthModule } from '@app/auth/auth.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  await app.listen(3000);
}
bootstrap();
