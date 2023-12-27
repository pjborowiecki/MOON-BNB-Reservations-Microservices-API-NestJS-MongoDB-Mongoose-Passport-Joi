import { PartialType } from '@nestjs/mapped-types';

import { CreateReservationDto } from '@app/reservations/dto/create-reservation.dto';

export class UpdateReservationDto extends PartialType(CreateReservationDto) {}
