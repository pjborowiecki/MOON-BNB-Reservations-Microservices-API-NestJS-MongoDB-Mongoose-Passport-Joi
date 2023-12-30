import { Injectable } from '@nestjs/common';

import { NotifyEmailDto } from '@app/notifications/dto/notify-email.dto';
@Injectable()
export class NotificationsService {
  async notifyEmail(notifyEmailDto: NotifyEmailDto) {
    console.log(notifyEmailDto.email);
  }
}
