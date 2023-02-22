import { Controller, Get } from '@nestjs/common';
import {
  AppController as CommonAppController,
  LoggerService,
} from '@moesjarraf/nestjs-common';
import { ConfigService } from './config/config.service';

// example to show how to modify the common/app.controller
@Controller()
export class AppController extends CommonAppController {
  constructor(
    protected readonly config: ConfigService,
    private readonly logger: LoggerService,
  ) {
    super(config);
    this.logger = logger.build(AppController.name);
  }

  // example to show how to use common/logger.service and load custom config
  @Get('example')
  async example() {
    // common module config
    this.logger.info(`APP_NAME=${this.config.app.name}`);
    this.logger.info(`PORT=${this.config.port}`);

    // custom config
    this.logger.info(`FOO=${this.config.foo}`);

    return 'example';
  }
}
