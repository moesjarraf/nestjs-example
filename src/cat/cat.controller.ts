import {
  ApiGetByIdParams,
  ApiSearchQuery,
  CrudApiController,
} from '@moesjarraf/nestjs-common';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CatApiAddDto } from './api/add.api';
import { CatApiUpdateDto } from './api/update.api';
import { CatService } from './cat.service';

@Controller('api/cats')
@ApiTags('cat')
export class CatController extends CrudApiController {
  constructor(protected readonly service: CatService) {
    super(service);
  }

  @Get()
  async list(@Query() query: ApiSearchQuery) {
    return super.list(query);
  }

  @Get(':id')
  async get(@Param() params: ApiGetByIdParams) {
    return super.get(params);
  }

  @HttpCode(201)
  @Post()
  async add(@Body() body: CatApiAddDto) {
    return super.add(body);
  }

  @Post(':id')
  async update(
    @Body() body: CatApiUpdateDto,
    @Param() params: ApiGetByIdParams,
  ) {
    return super.update(body, params);
  }

  @HttpCode(204)
  @Delete(':id')
  async delete(@Param() params: ApiGetByIdParams) {
    return super.delete(params);
  }
}
