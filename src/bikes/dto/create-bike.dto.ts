import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateBikeDto {
  @IsString()
  @IsNotEmpty()
  make?: string;

  @IsString()
  @IsNotEmpty()
  model?: string;

  @IsNumber()
  @IsNotEmpty()
  year?: number;

  @IsString()
  @IsNotEmpty()
  type?: string;
}
