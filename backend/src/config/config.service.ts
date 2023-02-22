import { ConfigService as CommonConfigService } from '@moesjarraf/nestjs-common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService extends CommonConfigService {}
