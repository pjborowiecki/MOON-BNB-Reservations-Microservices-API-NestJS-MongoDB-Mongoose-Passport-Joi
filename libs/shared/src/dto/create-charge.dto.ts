import { Type } from 'class-transformer';
import {
  IsDefined,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  ValidateNested,
} from 'class-validator';

import { CreditCardDto } from '@app/shared/dto/credit-card.dto';

export class CreateChargeDto {
  @IsDefined()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreditCardDto)
  card: CreditCardDto;

  @IsNumber()
  @IsNotEmpty()
  amount: number;
}
