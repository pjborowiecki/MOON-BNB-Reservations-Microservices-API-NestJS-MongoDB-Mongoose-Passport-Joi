import { Module } from '@nestjs/common';

import { HealthController } from '@app/shared/health/health.controller';

@Module({
  controllers: [HealthController],
})
export class HealthModule {}
