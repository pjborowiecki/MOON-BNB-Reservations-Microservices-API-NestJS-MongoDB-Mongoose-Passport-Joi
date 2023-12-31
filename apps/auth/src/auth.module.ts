import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import * as Joi from 'joi';

import { LoggerModule } from '@app/shared/logger/logger.module';
import { HealthModule } from '@app/shared/health/health.module';

import { AuthController } from '@app/auth/auth.controller';
import { LocalStrategy } from '@app/auth/strategies/local.strategy';
import { JwtStrategy } from '@app/auth/strategies/jwt.strategy';
import { AuthService } from '@app/auth//auth.service';
import { UsersModule } from '@app/auth/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        HTTP_PORT: Joi.number().required(),
        TCP_PORT: Joi.number().required(),
        DATABASE_URI: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION: Joi.string().required(),
      }),
    }),
    LoggerModule,
    UsersModule,
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: `${configService.get<string>('JWT_EXPIRATION')}s`,
        },
      }),
      inject: [ConfigService],
    }),
    HealthModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
