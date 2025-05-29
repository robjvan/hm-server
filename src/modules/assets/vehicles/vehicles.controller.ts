import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { VehiclesService } from './vehicles.service';

@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

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
