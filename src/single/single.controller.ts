import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Res,
} from '@nestjs/common';
import { SingleService } from './single.service';
import { CreateSingleDto } from './dto/create-single.dto';
import { UpdateSingleDto } from './dto/update-single.dto';
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

import { getFileName } from 'src/Common/common-file';
@Controller('single')
export class SingleController {
  constructor(private readonly singleService: SingleService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './singleUpload',
        filename: getFileName, //File name from common file
      }),
    }),
  ) //FileInterceptor take two arguments 1. fieldName from  front end (Here 'file) 2.multer option object(optional) https://github.com/expressjs/multer#multeropts
  create(
    @UploadedFile() file: Express.Multer.File, //@UploadedFile() Method will extract File fro body
  ) {
    console.log(file.path);

    // return this.singleService.create(createSingleDto);
  }
  //Send image to front end.Without serving
  @Get('view/:imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    console.log(image);

    return res.sendFile(image, { root: './singleUpload' });
  }
}
