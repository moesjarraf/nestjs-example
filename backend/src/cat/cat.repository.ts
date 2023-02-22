import { Injectable, Inject } from '@nestjs/common';
import { ENTITY_CAT } from '../constants';
import { PopulateOptions } from 'mongoose';
import { CatEntity } from './entities/cat.entity';
import { DatabaseRepository } from '@moesjarraf/nestjs-common';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class CatRepository extends DatabaseRepository<CatEntity> {
  get populate(): PopulateOptions[] {
    return [];
  }

  constructor(
    @Inject(ENTITY_CAT) protected entity: ReturnModelType<typeof CatEntity>,
  ) {
    super(entity);
  }
}
