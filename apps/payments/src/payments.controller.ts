import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { PaymentsService } from '@app/payments/payments.service';
import { PaymentsCreateChargeDto } from '@app/payments/dto/payments-create-charge-dto';

@Controller()
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @MessagePattern('create_charge')
  @UsePipes(new ValidationPipe())
  async createCharge(
    @Payload() paymentsCreateChargeDto: PaymentsCreateChargeDto,
  ) {
    return this.paymentsService.createCharge(paymentsCreateChargeDto);
  }
}
