import { Injectable } from '@nestjs/common';
import { CreateSingleDto } from './dto/create-single.dto';
import { UpdateSingleDto } from './dto/update-single.dto';

@Injectable()
export class SingleService {
  create(createSingleDto: CreateSingleDto) {
    return 'This action adds a new single';
  }

  findAll() {
    return `This action returns all single`;
  }

  findOne(id: number) {
    return `This action returns a #${id} single`;
  }

  update(id: number, updateSingleDto: UpdateSingleDto) {
    return `This action updates a #${id} single`;
  }

  remove(id: number) {
    return `This action removes a #${id} single`;
  }
}
