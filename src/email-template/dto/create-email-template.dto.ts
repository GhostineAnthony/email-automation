import { Title } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class createEmailTemplateDto {
  @IsNotEmpty()
  @IsEnum(Title)
  title: Title;

  @IsNotEmpty()
  @IsString()
  subject: string;

  @IsNotEmpty()
  @IsString()
  text: string;
}
