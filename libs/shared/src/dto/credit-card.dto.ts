import { IsString, IsNotEmpty, IsNumber, IsCreditCard } from 'class-validator';

export class CreditCardDto {
  @IsCreditCard()
  @IsNotEmpty()
  number: string;

  @IsString()
  @IsNotEmpty()
  cvc: string;

  @IsNumber()
  @IsNotEmpty()
  exp_month: number;

  @IsNumber()
  @IsNotEmpty()
  exp_year: number;
}
