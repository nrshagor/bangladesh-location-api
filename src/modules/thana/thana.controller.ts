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
import { ThanaService } from './thana.service';
import { CreateThanaDto } from './dto/create-thana.dto';
import { UpdateThanaDto } from './dto/update-thana.dto';

@Controller('thana')
export class ThanaController {
  constructor(private readonly thanaService: ThanaService) {}

  @Post()
  create(@Body() createThanaDto: CreateThanaDto) {
    return this.thanaService.create(createThanaDto);
  }

  @Get()
  findAll() {
    return this.thanaService.findAll();
  }

  @Get(':param')
  async findOne(@Param('param') param: string) {
    // Check if param is a number (for ID) or a string (for name)
    const id = parseInt(param, 10); // Try to parse param as integer

    if (isNaN(id)) {
      // If param is not a number, assume it's a thana name in either language
      return this.thanaService.findByName(param);
    } else {
      // If param is a number, find thana by ID
      return this.thanaService.findOne(id);
    }
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateThanaDto: UpdateThanaDto,
  ) {
    return this.thanaService.update(id, updateThanaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.thanaService.remove(id);
  }
}
