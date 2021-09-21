import { Module } from '@nestjs/common';
import { MultipleService } from './multiple.service';
import { MultipleController } from './multiple.controller';

@Module({
  controllers: [MultipleController],
  providers: [MultipleService]
})
export class MultipleModule {}
