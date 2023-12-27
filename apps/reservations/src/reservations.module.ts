import { Module } from '@nestjs/common';

import { ReservationsService } from '@app/reservations/reservations.service';
import { ReservationsController } from '@app/reservations/reservations.controller';
import { ReservationsRepository } from '@app/reservations/reservations.repository';

import { DatabaseModule } from '@app/shared/database/database.module';
import {
  ReservationDocument,
  ReservationSchema,
} from '@app/reservations/entities/reservation.entity';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: ReservationDocument.name, schema: ReservationSchema },
    ]),
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService, ReservationsRepository],
})
export class ReservationsModule {}
