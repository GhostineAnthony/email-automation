import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { createUserDto } from './dto/createUser.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class UsersService {
  async create(data: createUserDto) {
    try {
      const user = await prisma.users.create({ data });
      return { message: 'Created Successfully' };
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }
}
