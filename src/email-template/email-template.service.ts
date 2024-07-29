import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { createEmailTemplateDto } from './dto/create-email-template.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class EmailTemplateService {
  async create(data: createEmailTemplateDto) {
    try {
      const emailTemplate = await prisma.emailTemplate.create({ data });
      return { message: 'Created Successfully' };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
