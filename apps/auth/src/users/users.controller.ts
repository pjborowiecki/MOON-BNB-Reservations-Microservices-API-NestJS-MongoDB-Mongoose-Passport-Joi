import { Controller, Body, Post } from '@nestjs/common';

import { UsersService } from '@app/auth/users/users.service';
import { CreateUserDto } from '@app/auth/users/dto/CreateUserDto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
