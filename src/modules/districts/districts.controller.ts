import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { DistrictsService } from './districts.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';

@Controller('districts')
export class DistrictsController {
  constructor(private readonly districtsService: DistrictsService) {}

  @Post()
  create(@Body() createDistrictDto: CreateDistrictDto) {
    return this.districtsService.create(createDistrictDto);
  }

  @Get()
  findAll() {
    return this.districtsService.findAll();
  }

  @Get(':param')
  async findOne(@Param('param') param: string) {
    // Check if param is a number (for ID) or a string (for name)
    const id = parseInt(param, 10); // Try to parse param as integer

    if (isNaN(id)) {
      // If param is not a number, assume it's a districts name in either language
      return this.districtsService.findByName(param);
    } else {
      // If param is a number, find districts by ID
      return this.districtsService.findOne(id);
    }
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDistrictDto: UpdateDistrictDto,
  ) {
    return this.districtsService.update(id, updateDistrictDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.districtsService.remove(id);
  }
}
