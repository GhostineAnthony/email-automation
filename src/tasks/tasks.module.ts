// src/tasks/tasks.module.ts
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { MailModule } from '../mail/mail.module';
import { TaskService } from './tasks.service';
import { MailService } from 'src/mail/mail.service';
import { TasksController } from './tasks.controller';

@Module({
  imports: [ScheduleModule.forRoot(), MailModule],
  controllers: [TasksController],
  providers: [TaskService, MailService],
})
export class TasksModule {}
