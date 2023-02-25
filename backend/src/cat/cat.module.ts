import { CreateDatabaseEntityProvider } from '@moesjarraf/nestjs-common';
import { Module } from '@nestjs/common';
import { ENTITY_CAT } from 'src/constants';
import { CatController } from './cat.controller';
import { CatRepository } from './cat.repository';
import { CatService } from './cat.service';
import { CatEntity } from './entities/cat.entity';

@Module({
  imports: [],
  controllers: [CatController],
  providers: [
    CreateDatabaseEntityProvider(ENTITY_CAT, CatEntity, 'cats'),
    CatRepository,
    CatService,
  ],
  exports: [CatService],
})
export class CatModule {}
