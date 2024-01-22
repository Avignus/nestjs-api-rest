import { IsDateString, IsInt, IsNotEmpty, IsPositive } from 'class-validator';

export class CreateStockInputDto {
  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  product_id: number;
  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  quantity: number;
  @IsNotEmpty()
  @IsDateString()
  date: string;
}
