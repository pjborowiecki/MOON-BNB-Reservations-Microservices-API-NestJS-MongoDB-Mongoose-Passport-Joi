import { Test, TestingModule } from '@nestjs/testing';

import { ReservationsController } from 'apps/reservations/src/reservations.controller';
import { ReservationsService } from 'apps/reservations/src/reservations.service';

describe('ReservationsController', () => {
  let reservationsController: ReservationsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ReservationsController],
      providers: [ReservationsService],
    }).compile();

    reservationsController = app.get<ReservationsController>(
      ReservationsController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(reservationsController.getHello()).toBe('Hello World!');
    });
  });
});
