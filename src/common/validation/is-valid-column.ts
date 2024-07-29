import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@ValidatorConstraint({ async: true })
export class IsUserColumnConstraint implements ValidatorConstraintInterface {
  async validate(column: string) {
    const userModel = prisma.users;
    const userColumns = Object.keys(userModel.fields);

    return userColumns.includes(column);
  }

  defaultMessage() {
    return 'The column $value is not a valid column in the user table';
  }
}

export function IsUserColumn(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUserColumnConstraint,
    });
  };
}
