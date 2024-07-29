// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TasksModule } from './tasks/tasks.module';
import { MailModule } from './mail/mail.module';
import { UsersModule } from './users/users.module';
import { EmailTemplateModule } from './email-template/email-template.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TasksModule,
    MailModule,
    UsersModule,
    EmailTemplateModule,
    TagsModule,
  ],
})
export class AppModule {}
