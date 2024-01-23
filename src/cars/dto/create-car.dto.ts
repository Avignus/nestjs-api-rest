import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateCarDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  imgUrl: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  maker: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  model: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  package: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  color: string;

  @MinLength(4)
  @MaxLength(4)
  @IsString()
  @IsNotEmpty()
  year: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  category: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsNotEmpty()
  mileage: number;

  @IsPositive()
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  price: number;
}
