import { Module } from '@nestjs/common';
import {
  AppModule as CommonAppModule,
  CommonModule,
} from '@moesjarraf/nestjs-common';
import { LibraryModule } from '@moesjarraf/nestjs-library';
import { UserModule } from './user/user.module';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [CommonModule, LibraryModule, UserModule, CatModule],
})
export class AppModule extends CommonAppModule {}
