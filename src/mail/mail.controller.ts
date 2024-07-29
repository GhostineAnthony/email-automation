import { Controller, Post, Body } from '@nestjs/common';
import { MailService } from './mail.service';
import { sendMailDto } from 'src/common/dto/send-mail.dto';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  // @Post()
  // async create(
  //   @Body('email') email: string,
  //   @Body('emailTemplateId') emailTemplateId: string,
  //   @Body('noReplay') noReplay: boolean,
  //   @Body('firstName') firstName: string,
  //   @Body('lastName') lastName: string,
  //   @Body('attachementFile') attachementFile: string,
  // ) {
  //   return await this.mailService.sendMail(
  //     email,
  //     emailTemplateId,
  //     noReplay,
  //     firstName,
  //     lastName,
  //     attachementFile,
  //   );
  // }
}
