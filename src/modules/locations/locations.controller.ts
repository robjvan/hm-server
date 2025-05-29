import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { LocationsService } from './locations.service';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Get('/report')
  getReport() {}

  // @Get('/:id')
  // fetchOneById(@Param('id') id: number) {
  //   return this.locationsService.fetchRecordById('location', id);
  // }

  // @Get('/city/:id')
  // fetchCityById(@Param('id') id: number) {
  //   return this.locationsService.fetchRecordById('city', id);
  // }

  // @Get('/country/:id')
  // fetchCountryById(@Param('id') id: number) {
  //   return this.locationsService.fetchRecordById('country', id);
  // }

  // @Get('/region/:id')
  // fetchRegionById(@Param('id') id: number) {
  //   return this.locationsService.fetchRecordById('region', id);
  // }

  @Get('/user/:userId')
  fetchOneByUserId(@Param('userId') userId: number) {
    return this.locationsService.fetchOneByUserId(userId);
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
