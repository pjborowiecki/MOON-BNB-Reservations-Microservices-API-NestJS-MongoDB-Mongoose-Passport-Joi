import { Controller, Body, Post, Get, UseGuards } from '@nestjs/common';

import { UserDocument } from '@app/shared/entities/user.entity';
import { CurrentUser } from '@app/shared/decorators/current-user.decorator';

import { UsersService } from '@app/auth/users/users.service';
import { CreateUserDto } from '@app/auth/users/dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @UseGuards()
  async getUser(@CurrentUser() user: UserDocument) {
    return user;
  }
}
