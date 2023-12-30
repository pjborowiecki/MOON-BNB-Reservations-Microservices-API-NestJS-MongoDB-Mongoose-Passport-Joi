import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

import { PAYMENTS_SERVICE } from '@app/shared/constants/services';
import { UserDto } from '@app/shared/dto/user.dto';

import { ReservationsRepository } from '@app/reservations/reservations.repository';
import { CreateReservationDto } from '@app/reservations/dto/create-reservation.dto';
import { UpdateReservationDto } from '@app/reservations/dto/update-reservation.dto';

@Injectable()
export class ReservationsService {
  constructor(
    private readonly reservationsRepository: ReservationsRepository,
    @Inject(PAYMENTS_SERVICE) private readonly paymentsService: ClientProxy,
  ) {}

  async create(createReservationDto: CreateReservationDto, userDto: UserDto) {
    return this.paymentsService
      .send('create_charge', {
        ...createReservationDto.charge,
        email: userDto.email,
      })
      .pipe(
        map((res) => {
          return this.reservationsRepository.create({
            ...createReservationDto,
            invoiceId: res.id,
            createdAt: new Date(),
            userId: userDto._id,
          });
        }),
      );
  }

  async findAll() {
    return this.reservationsRepository.find({});
  }

  async findOne(_id: string) {
    return this.reservationsRepository.findOne({ _id });
  }

  async update(_id: string, updateReservationDto: UpdateReservationDto) {
    return this.reservationsRepository.findOneAndUpdate(
      { _id },
      { $set: updateReservationDto },
    );
  }

  async remove(_id: string) {
    return this.reservationsRepository.findOneAndDelete({ _id });
  }
}
