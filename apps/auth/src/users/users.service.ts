import { Injectable } from '@nestjs/common';

import { UsersRepository } from '@app/auth/users/users.repository';
import { CreateUserDto } from '@app/auth/users/dto/CreateUserDto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    return this.usersRepository.create(createUserDto);
  }
}
