import { DatabaseEntityService } from '@moesjarraf/nestjs-common';
import { Injectable } from '@nestjs/common';
import { CatRepository } from './cat.repository';
import { CatEntity } from './entities/cat.entity';

@Injectable()
export class CatService extends DatabaseEntityService<CatEntity> {
  constructor(protected readonly repository: CatRepository) {
    super(repository);
  }
}
