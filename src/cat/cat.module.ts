import { Module } from '@nestjs/common';
import { CatController } from './cat.controller';
import { catProviders } from './cat.provider';
import { CatRepository } from './cat.repository';
import { CatService } from './cat.service';

@Module({
  imports: [],
  controllers: [CatController],
  providers: [...catProviders, CatRepository, CatService],
  exports: [CatService],
})
export class CatModule {}
