import { Controller, Get } from '@nestjs/common';

import { ReservationsService } from 'apps/reservations/src/reservations.service';

@Controller()
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Get()
  getHello(): string {
    return this.reservationsService.getHello();
  }
}
