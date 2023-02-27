import { Module } from '@nestjs/common';
import {
  AppModule as CommonAppModule,
  CommonModule,
} from '@moesjarraf/nestjs-common';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [CommonModule, CatModule],
})
export class AppModule extends CommonAppModule {}
