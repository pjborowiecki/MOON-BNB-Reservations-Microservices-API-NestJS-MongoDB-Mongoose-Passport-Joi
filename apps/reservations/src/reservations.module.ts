import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { ReservationsService } from '@app/reservations/reservations.service';
import { ReservationsController } from '@app/reservations/reservations.controller';
import { ReservationsRepository } from '@app/reservations/reservations.repository';

import { LoggerModule } from '@app/shared/logger/logger.module';
import { DatabaseModule } from '@app/shared/database/database.module';
import {
  ReservationDocument,
  ReservationSchema,
} from '@app/reservations/entities/reservation.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
        DATABASE_URI: Joi.string().required(),
      }),
    }),
    LoggerModule,
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: ReservationDocument.name, schema: ReservationSchema },
    ]),
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService, ReservationsRepository],
})
export class ReservationsModule {}
