import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxy } from '@nestjs/microservices';
import Stripe from 'stripe';

import { NOTIFICATIONS_SERVICE } from '@app/shared/constants/services';

import { PaymentsCreateChargeDto } from '@app/payments/dto/payments-create-charge-dto';

@Injectable()
export class PaymentsService {
  constructor(
    private readonly configService: ConfigService,
    @Inject(NOTIFICATIONS_SERVICE)
    private readonly notificationsService: ClientProxy,
  ) {}

  private readonly stripe = new Stripe(
    this.configService.get<string>('STRIPE_SECRET_KEY'),
    {
      apiVersion: '2023-10-16',
    },
  );

  async createCharge(paymentsCreateChargeDto: PaymentsCreateChargeDto) {
    const paymentMethod = await this.stripe.paymentMethods.create({
      type: 'card',
      card: paymentsCreateChargeDto.card,
    });

    const paymentIntent = await this.stripe.paymentIntents.create({
      payment_method_types: ['card'],
      payment_method: paymentMethod.id,
      amount: paymentsCreateChargeDto.amount * 100,
      confirm: true,
      currency: 'usd',
    });

    this.notificationsService.emit('notify_email', {
      email: paymentsCreateChargeDto.email,
    });

    return paymentIntent;
  }
}
