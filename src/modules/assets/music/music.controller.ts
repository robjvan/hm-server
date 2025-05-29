import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MusicService } from './music.service';

@Controller('music')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @Get('/report')
  getReport() {}

  @Get()
  fetchAll() {}

  @Get('/user/:userId')
  fetchAllbyUserId(@Param('userId') userId: number) {
    console.log(userId);
  }

  @Get('/:id')
  fetchOneById(@Param('id') id: number) {
    console.log(id);
  }

  @Post()
  addNewRecord(@Body() data: any) {
    console.log(data);
  }

  @Patch('/:id')
  updateOneById(@Param('id') id: number, @Body() data: any) {
    console.log(id, data);
  }

  @Delete('/:id')
  deleteOneById(@Param('id') id: number) {
    console.log(id);
  }
}
