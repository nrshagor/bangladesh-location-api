import { Module } from '@nestjs/common';
import { ThanaService } from './thana.service';
import { ThanaController } from './thana.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Thana } from './entities/thana.entity';
import { DistrictsModule } from '../districts/districts.module';

@Module({
  imports: [TypeOrmModule.forFeature([Thana]), DistrictsModule],
  controllers: [ThanaController],
  providers: [ThanaService],
})
export class ThanaModule {}
