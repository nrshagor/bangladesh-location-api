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
import { DivisionsService } from './divisions.service';
import { CreateDivisionDto } from './dto/create-division.dto';
import { UpdateDivisionDto } from './dto/update-division.dto';

@Controller('divisions')
export class DivisionsController {
  constructor(private readonly divisionsService: DivisionsService) {}

  @Post()
  async create(@Body() createDivisionDto: CreateDivisionDto) {
    return this.divisionsService.create(createDivisionDto);
  }

  @Get()
  async findAll() {
    return this.divisionsService.findAll();
  }

  @Get(':param')
  async findOne(@Param('param') param: string) {
    // Check if param is a number (for ID) or a string (for name)
    const id = parseInt(param, 10); // Try to parse param as integer

    if (isNaN(id)) {
      // If param is not a number, assume it's a division name in either language
      return this.divisionsService.findByName(param);
    } else {
      // If param is a number, find division by ID
      return this.divisionsService.findOne(id);
    }
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDivisionDto: UpdateDivisionDto,
  ) {
    return this.divisionsService.update(id, updateDivisionDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.divisionsService.remove(id);
  }
}
