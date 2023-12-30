import { Test, TestingModule } from '@nestjs/testing';

import { NotificationsController } from '@app/notifications/notifications.controller';
import { NotificationsService } from '@app/notifications/notifications.service';

describe('NotificationsController', () => {
  let notificationsController: NotificationsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NotificationsController],
      providers: [NotificationsService],
    }).compile();

    notificationsController = app.get<NotificationsController>(
      NotificationsController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(notificationsController.getHello()).toBe('Hello World!');
    });
  });
});
