// src/tasks/task.service.ts
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { MailService } from '../mail/mail.service';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class TaskService {
  constructor(private readonly mailService: MailService) {}

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async handleCron() {
    try {
      const email = await prisma.emailTemplate.findFirst({
        where: { title: 'BROADCAST' },
      });
      const users = await prisma.users.findMany();
      for (const user of users) {
        await this.mailService.sendMail(user, email.id, false, 'EB.png');
      }
      // const user = await prisma.users.findFirst();
      // return await this.mailService.sendMail(user, email.id, false, 'EB.png');

      // await prisma.users.updateMany({
      //   where: { id: { in: users.map((user) => user.id) } },
      //   data: { emailsent: true },
      // });
      return { message: 'Email send successfully' };
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }
}
