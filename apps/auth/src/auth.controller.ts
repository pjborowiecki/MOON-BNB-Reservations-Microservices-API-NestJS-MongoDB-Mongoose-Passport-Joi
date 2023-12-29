import { Response } from 'express';
import { Controller, Post, UseGuards, Res } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { AuthService } from '@app/auth/auth.service';
import { LocalAuthGuard } from '@app/auth/guards/local-auth.guard';
import { JwtAuthGuard } from '@app/auth/guards/jwt-auth.guard';

import { UserDocument } from '@app/auth/users/entities/user.entity';
import { CurrentUser } from '@app/shared/decorators/current-user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  @UseGuards(LocalAuthGuard)
  async signin(
    @CurrentUser() user: UserDocument,
    @Res({ passthrough: true }) response: Response,
  ) {
    await this.authService.signin(user, response);
    response.send(user);
  }

  @UseGuards(JwtAuthGuard)
  @MessagePattern('authenticate')
  async authenticate(@Payload() data: any) {
    return data.user;
  }
}
