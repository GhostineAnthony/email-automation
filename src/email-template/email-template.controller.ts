import { Body, Controller, Post } from '@nestjs/common';
import { EmailTemplateService } from './email-template.service';
import { createEmailTemplateDto } from './dto/create-email-template.dto';

@Controller('email-template')
export class EmailTemplateController {
  constructor(private readonly emailTemplateService: EmailTemplateService) {}

  @Post()
  async create(@Body() data: createEmailTemplateDto) {
    return await this.emailTemplateService.create(data);
  }
}
