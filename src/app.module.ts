import { Module } from '@nestjs/common';
import {
  AppModule as CommonAppModule,
  AppModuleConfig,
} from '@moesjarraf/nestjs-common';
import { AppController } from './app.controller';
import { ConfigModule } from './config/config.module';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [...AppModuleConfig.imports, ConfigModule, CatModule],
  controllers: [...AppModuleConfig.controllers, AppController],
  providers: [...AppModuleConfig.providers],
  exports: [...AppModuleConfig.exports],
})
export class AppModule extends CommonAppModule {}
