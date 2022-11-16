import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateRegionDto } from './createRegionDto';

@Controller('regions')
export class RegionsController {
  @Get()
  async findAllRegions(): Promise<any[]> {
    return ['findAllRegions'];
  }

  @Get(':id')
  async findOneRegion(@Param() param): Promise<any[]> {
    return ['findOneRegion', `${param.id}`];
  }

  @Post()
  async createRegion(@Body() createRegionDto: CreateRegionDto): Promise<any[]> {
    return ['createRegion', `${createRegionDto}`];
  }

  @Patch(':id')
  async updateRegion(@Param() param): Promise<any[]> {
    return ['updateRegion', `${param.id}`];
  }

  @Delete(':id')
  async deleteRegion(@Param() param): Promise<any[]> {
    return ['deleteRegion', `${param.id}`];
  }
}
