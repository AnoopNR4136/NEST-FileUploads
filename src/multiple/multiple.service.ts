import { Injectable } from '@nestjs/common';
import { CreateMultipleDto } from './dto/create-multiple.dto';
import { UpdateMultipleDto } from './dto/update-multiple.dto';

@Injectable()
export class MultipleService {
  create(createMultipleDto: CreateMultipleDto) {
    return 'This action adds a new multiple';
  }

  findAll() {
    return `This action returns all multiple`;
  }

  findOne(id: number) {
    return `This action returns a #${id} multiple`;
  }

  update(id: number, updateMultipleDto: UpdateMultipleDto) {
    return `This action updates a #${id} multiple`;
  }

  remove(id: number) {
    return `This action removes a #${id} multiple`;
  }
}
