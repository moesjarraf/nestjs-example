import { KeycloakUser } from '@moesjarraf/nestjs-library';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import {
  AuthGuard,
  RoleGuard,
  Roles,
  AuthenticatedUser,
} from 'nest-keycloak-connect';

@Controller('api/users')
@ApiTags('user')
export class UserController {
  @ApiBearerAuth()
  @UseGuards(AuthGuard, RoleGuard)
  @Roles({ roles: ['admin', 'user'] })
  @Get('me')
  example(@AuthenticatedUser() user: KeycloakUser) {
    return {
      email: user.email,
      first_name: user.given_name,
      last_name: user.family_name,
    };
  }
}
