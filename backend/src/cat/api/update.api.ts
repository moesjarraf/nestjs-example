import { PartialType } from '@nestjs/swagger';
import { CatApiAddDto } from './add.api';

export class CatApiUpdateDto extends PartialType(CatApiAddDto) {}
