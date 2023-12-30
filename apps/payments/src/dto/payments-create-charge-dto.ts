import { IsEmail, IsNotEmpty } from 'class-validator';

import { CreateChargeDto } from '@app/shared/dto/create-charge.dto';

export class PaymentsCreateChargeDto extends CreateChargeDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
