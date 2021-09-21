import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SingleModule } from './single/single.module';
import { MultipleModule } from './multiple/multiple.module';

@Module({
  imports: [SingleModule, MultipleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
