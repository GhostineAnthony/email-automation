import { InternalServerErrorException } from '@nestjs/common';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function readTextFile(fileName: string) {
  try {
    const filePath = join(
      `${__dirname}/../../src/common/email-template`,
      fileName,
    );
    const data = await readFile(filePath, 'utf8');
    return data;
  } catch (error) {
    throw new InternalServerErrorException('Failed to read the text file!');
  }
}
