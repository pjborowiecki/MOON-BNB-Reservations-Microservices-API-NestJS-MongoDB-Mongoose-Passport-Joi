import { Module } from '@nestjs/common';

import { ReservationsController } from 'apps/reservations/src/reservations.controller';
import { ReservationsService } from 'apps/reservations/src/reservations.service';

import { DatabaseModule } from '@app/shared/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ReservationsController],
  providers: [ReservationsService],
})
export class ReservationsModule {}
