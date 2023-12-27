import { Module } from '@nestjs/common';

import { AuthController } from '@app/auth/auth.controller';
import { AuthService } from '@app/auth//auth.service';
import { UsersModule } from '@app/auth/users/users.module';

import { LoggerModule } from '@app/shared/logger/logger.module';

@Module({
  imports: [UsersModule, LoggerModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
