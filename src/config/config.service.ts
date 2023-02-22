import { ConfigService as CommonConfigService } from '@moesjarraf/nestjs-common';
import { Injectable } from '@nestjs/common';

// example to show how to extend common/config.service
@Injectable()
export class ConfigService extends CommonConfigService {
  get foo() {
    return this.get<string>('FOO');
  }
}
