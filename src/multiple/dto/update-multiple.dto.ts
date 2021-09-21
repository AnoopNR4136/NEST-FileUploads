import { PartialType } from '@nestjs/mapped-types';
import { CreateMultipleDto } from './create-multiple.dto';

export class UpdateMultipleDto extends PartialType(CreateMultipleDto) {}
