import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaClient, Users } from '@prisma/client';
import * as nodemailer from 'nodemailer';
// import * as cheerio from 'cheerio';

const prisma = new PrismaClient();

@Injectable()
export class MailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAILPASSWORD,
      },
    });
  }

  async sendMail(
    user: Partial<Users>,
    emailTemplateId: string,
    noReplay: boolean,
    attachementFile: string,
  ) {
    try {
      const recipients = Array.isArray(user.email) ? user.email : [user.email];

      // Find the attachment file
      const attachments = [
        {
          filename: attachementFile,
          path: `${__dirname}/../../src/common/email-template/${attachementFile}`,
        },
      ];

      // Find the email template
      const mail = await prisma.emailTemplate.findUnique({
        where: { id: emailTemplateId },
      });

      if (!mail) {
        throw new Error('Email template not found');
      }

      const subject = mail.subject;
      const textWithPlaceholders = mail.text
        .replace(
          '<studentName>',
          `${capitalizeFirstLetter(user.firstName)} ${capitalizeFirstLetter(user.lastName)}`,
        )
        .replace('<studentId>', `${user.id}`);

      // const txt = cheerio.load(textWithPlaceholders);
      // const html = txt.html();

      const mailOptions = {
        from: process.env.EMAIL,
        to: recipients.join(','),
        subject,
        html: textWithPlaceholders,
        replyTo: noReplay ? undefined : process.env.EMAIL,
        attachments,
      };

      await this.transporter.sendMail(mailOptions);
      return { message: 'Email sent successfully' };
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }
}

function capitalizeFirstLetter(str: string): string {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}
