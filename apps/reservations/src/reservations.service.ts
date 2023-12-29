import { Injectable } from '@nestjs/common';

import { ReservationsRepository } from '@app/reservations/reservations.repository';
import { CreateReservationDto } from '@app/reservations/dto/create-reservation.dto';
import { UpdateReservationDto } from '@app/reservations/dto/update-reservation.dto';

@Injectable()
export class ReservationsService {
  constructor(
    private readonly reservationsRepository: ReservationsRepository,
  ) {}

  create(createReservationDto: CreateReservationDto, userId: string) {
    return this.reservationsRepository.create({
      ...createReservationDto,
      createdAt: new Date(),
      userId,
    });
  }

  findAll() {
    return this.reservationsRepository.find({});
  }

  findOne(_id: string) {
    return this.reservationsRepository.findOne({ _id });
  }

  update(_id: string, updateReservationDto: UpdateReservationDto) {
    return this.reservationsRepository.findOneAndUpdate(
      { _id },
      { $set: updateReservationDto },
    );
  }

  remove(_id: string) {
    return this.reservationsRepository.findOneAndDelete({ _id });
  }
}
