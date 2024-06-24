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

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.thanaService.findOne(id);
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
