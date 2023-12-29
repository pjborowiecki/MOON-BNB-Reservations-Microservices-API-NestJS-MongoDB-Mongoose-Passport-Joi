import { Controller, Body, Post, Get, UseGuards } from '@nestjs/common';

import { UsersService } from '@app/auth/users/users.service';
import { UserDocument } from '@app/auth/users/entities/user.entity';
import { CreateUserDto } from '@app/auth/users/dto/create-user.dto';
import { CurrentUser } from '@app/auth/users/decorators/current-user.decorator';

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
