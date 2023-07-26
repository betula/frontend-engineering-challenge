import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IsInt,
  Min,
  IsIn,
} from 'class-validator';

export class RecipeDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @MaxLength(200)
  description!: string;

  @IsString()
  protein!: string;

  @IsString()
  produce!: string;

  @IsString()
  spice!: string;

  @IsString()
  cookingOil!: string;

  @IsInt()
  @Min(0)
  volume!: number;

  @IsInt()
  @Min(0)
  serves!: number;

  @IsString()
  stock!: string;

  @IsString()
  origin!: string;

  @IsInt()
  @IsIn([0, 1, 2])
  difficulty!: number;

  @IsString()
  @IsIn(['Verified', 'Unverified'])
  authenticity!: string;
}
