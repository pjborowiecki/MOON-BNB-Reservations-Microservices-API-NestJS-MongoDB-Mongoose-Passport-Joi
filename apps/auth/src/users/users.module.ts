import { Module } from '@nestjs/common';

import { DatabaseModule } from '@app/shared/database/database.module';

import { UsersController } from '@app/auth/users/users.controller';
import { UsersService } from '@app/auth/users/users.service';
import { UsersRepository } from '@app/auth/users/users.repository';
import { UserDocument, UserSchema } from '@app/auth/users/entities/user.entity';

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
