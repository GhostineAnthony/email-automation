import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class sendMailDto {
  @IsNotEmpty()
  @IsString()
  emailTemplateId: string;

  @IsOptional()
  @IsEnum(['all', 'new'])
  to: 'all' | 'new';

  @IsOptional()
  @IsString()
  attachementName: string;

  @IsOptional()
  @IsBoolean()
  noReplay: boolean;

  //I created this one only from mail service
  @IsOptional()
  @IsString()
  user: string;
}
