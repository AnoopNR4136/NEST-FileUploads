import { PartialType } from '@nestjs/mapped-types';
import { CreateSingleDto } from './create-single.dto';

export class UpdateSingleDto extends PartialType(CreateSingleDto) {}
