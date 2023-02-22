import { Main } from '@moesjarraf/nestjs-common';
import { AppModule } from './app.module';

const main = new Main(AppModule);
main.bootstrap();
