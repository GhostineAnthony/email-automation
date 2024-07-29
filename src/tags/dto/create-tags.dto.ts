import { IsNotEmpty, Matches } from 'class-validator';
import {
  IsUserColumn,
  IsUserColumnConstraint,
} from 'src/common/validation/is-valid-column';

export class CreateTagsDto {
  @IsNotEmpty()
  @Matches(/^<[^<>]+>$/, { message: 'tags must be in the format <stringhere>' })
  tags: string;

  @IsNotEmpty()
  @IsUserColumn({
    message: 'replaceBy must be a valid column in the user table',
  })
  replaceBy: string;
}
