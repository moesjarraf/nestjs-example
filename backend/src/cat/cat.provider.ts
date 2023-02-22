import mongoose from 'mongoose';
import { getModelForClass } from '@typegoose/typegoose';
import { ENTITY_CAT } from '../constants';
import { CatEntity } from './entities/cat.entity';
import { DB_DEFAULT_CONNECTION } from '@moesjarraf/nestjs-common';

export const catProviders = [
  {
    provide: ENTITY_CAT,
    useFactory: (connection: mongoose.Connection) => {
      return getModelForClass(CatEntity, {
        existingConnection: connection,
        schemaOptions: {
          collection: 'cats',
          read: 'nearest',
          versionKey: false,
        },
      });
    },
    inject: [DB_DEFAULT_CONNECTION],
  },
];
