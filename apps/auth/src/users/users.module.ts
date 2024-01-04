import { Module } from '@nestjs/common';

import { DatabaseModule } from '@app/shared/database/database.module';

import { UserDocument, UserSchema } from '@app/shared/entities/user.entity';

import { UsersController } from '@app/auth/users/users.controller';
import { UsersService } from '@app/auth/users/users.service';
import { UsersRepository } from '@app/auth/users/users.repository';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: UserDocument.name, schema: UserSchema },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService],
})
export class UsersModule {}
