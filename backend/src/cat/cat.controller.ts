import { CreateCrudApiController } from '@moesjarraf/nestjs-common';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CatApiAddDto } from './api/add.api';
import { CatApiUpdateDto } from './api/update.api';
import { CatService } from './cat.service';

@Controller('api/cats')
@ApiTags('cat')
export class CatController extends CreateCrudApiController(
  CatApiAddDto,
  CatApiUpdateDto,
) {
  constructor(readonly service: CatService) {
    super(service);
  }
}
