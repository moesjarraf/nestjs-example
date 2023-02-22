import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum } from 'class-validator';
import { CatBreedEnum } from '../enums/breed.enum';

export class CatApiAddDto {
  @IsString()
  @ApiProperty({
    type: String,
    example: 'Cat',
  })
  readonly name: string;

  @IsEnum(CatBreedEnum)
  @ApiProperty({
    type: String,
    enum: CatBreedEnum,
    example: CatBreedEnum.Persian,
  })
  readonly breed: CatBreedEnum;
}
