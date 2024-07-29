import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateTagsDto } from './dto/create-tags.dto';

const prisma = new PrismaClient();
@Injectable()
export class TagsService {
  async create(data: CreateTagsDto) {
    try {
      const tag = await prisma.tags.create({ data });
      return { message: 'Created successfully' };
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }
}
