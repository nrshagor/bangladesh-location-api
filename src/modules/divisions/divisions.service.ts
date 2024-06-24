import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDivisionDto } from './dto/create-division.dto';
import { UpdateDivisionDto } from './dto/update-division.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Division } from './entities/division.entity';
import { Repository, ILike } from 'typeorm';

@Injectable()
export class DivisionsService {
  constructor(
    @InjectRepository(Division)
    private readonly divisionRepository: Repository<Division>,
  ) {}

  async create(createDivisionDto: CreateDivisionDto) {
    const division = this.divisionRepository.create(createDivisionDto);
    return await this.divisionRepository.save(division);
  }

  async findAll() {
    return (
      await this.divisionRepository.find({
        relations: ['districtList'],
      })
    ).sort();
  }

  async findOne(id: number) {
    return await this.divisionRepository.findOne({
      where: { id },
      relations: ['districtList'],
    });
  }

  async update(id: number, updateDivisionDto: UpdateDivisionDto) {
    const division = await this.findOne(id);
    if (!division) {
      throw new NotFoundException(`Division with ID ${id} not found`);
    }
    Object.assign(division, updateDivisionDto);
    return await this.divisionRepository.save(division);
  }

  async remove(id: number) {
    const division = await this.findOne(id);
    if (!division) {
      throw new NotFoundException(`Division with ID ${id} not found`);
    }
    return await this.divisionRepository.remove(division);
  }

  async seedDataIfNotExists() {
    const divisions = await this.divisionRepository.find();
    if (divisions.length === 0) {
      const seedData = [
        { name_bn: 'ঢাকা', name_en: 'Dhaka' },
        { name_bn: 'চট্টগ্রাম', name_en: 'Chittagong' },
        { name_bn: 'রাজশাহী', name_en: 'Rajshahi' },
        { name_bn: 'খুলনা', name_en: 'Khulna' },
        { name_bn: 'বরিশাল', name_en: 'Barisal' },
        { name_bn: 'সিলেট', name_en: 'Sylhet' },
        { name_bn: 'রংপুর', name_en: 'Rangpur' },
        { name_bn: 'ময়মনসিংহ', name_en: 'Mymensingh' },
      ];
      await this.divisionRepository.save(seedData);
    }
  }

  async findByName(name: string) {
    return await this.divisionRepository.findOne({
      where: [
        { name_bn: ILike(`%${name}%`) }, // ILike for case-insensitive like search
        { name_en: ILike(`%${name}%`) },
      ],
      relations: ['districtList'],
    });
  }
}
