import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

import { NotifyEmailDto } from '@app/notifications/dto/notify-email.dto';

@Injectable()
export class NotificationsService {
  constructor(private readonly configService: ConfigService) {}

  private readonly transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: this.configService.get('SMTP_USER'),
      clientId: this.configService.get('GOOGLE_OAUTH_CLIENT_ID'),
      refreshToken: this.configService.get('REFRESH_TOKEN'),
    },
  });

  async notifyEmail(notifyEmailDto: NotifyEmailDto) {
    await this.transporter.sendMail({
      from: this.configService.get('SMTP_USER'),
      to: notifyEmailDto.email,
      subject: 'MoonBnB Notification',
      text: notifyEmailDto.text,
    });
  }
}
