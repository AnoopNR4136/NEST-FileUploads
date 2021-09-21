import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { MultipleService } from './multiple.service';
import { CreateMultipleDto } from './dto/create-multiple.dto';
import { UpdateMultipleDto } from './dto/update-multiple.dto';
import {
  AnyFilesInterceptor,
  FileFieldsInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { getFileName } from 'src/Common/common-file';
import { diskStorage } from 'multer';

@Controller('multiple')
export class MultipleController {
  constructor(private readonly multipleService: MultipleService) {}

  @Post('multiple')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'avatar', maxCount: 1 },
        { name: 'background', maxCount: 1 },
      ],
      {
        storage: diskStorage({
          destination: './multiple',
          filename: getFileName, //File name from common file
        }),
      },
    ), // FileFieldsInterceptor() will take field names from front end ie avatar and background
  )
  create(
    @UploadedFiles()
    files: {
      avatar?: Express.Multer.File[];
      background?: Express.Multer.File[];
    },
  ) {
    console.log(files);

    // return this.multipleService.create(createMultipleDto);
  }

  ////////////////////////////////////////////////////////////////////////////
  //Upload  multiple files with same field name
  @Post('array')
  @UseInterceptors(
    FilesInterceptor('fieldName', 4, {
      //second argument should be  is max count ie 4
      storage: diskStorage({
        destination: './multipleArray',
        filename: getFileName, //File name from common file
      }),
    }),
  )
  arrayCreate(@UploadedFiles() fieldName: Array<Express.Multer.File>) {
    console.log(fieldName);
  }

  ///////////////////////////////////////////////////////////////////////////////
  //Without specifing the field name
  @Post('upload')
  @UseInterceptors(
    AnyFilesInterceptor({
      storage: diskStorage({
        destination: './anyname',
        filename: getFileName, //File name from common file
      }),
    }),
  )
  uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
  }
}
