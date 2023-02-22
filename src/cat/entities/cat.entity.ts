import { DatabaseEntity } from '@moesjarraf/nestjs-common';
import { prop } from '@typegoose/typegoose';
import { CatBreedEnum } from '../enums/breed.enum';

export class CatEntity extends DatabaseEntity {
  @prop({ required: true, text: true })
  name: string;

  @prop({ required: true, enum: CatBreedEnum })
  breed: CatBreedEnum;
}
