import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Region } from './entities/region.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RegionService extends TypeOrmCrudService<Region> {
  constructor(
    @InjectRepository(Region)
    private regionRepository: Repository<Region>,
  ) {
    super(regionRepository);
  }
  /*
  create(createRegionDto: CreateRegionDto) {
    return 'This action adds a new region';
  }

  findAll() {
    return `This action returns all region`;
  }

  findOne(id: number) {
    return `This action returns a #${id} region`;
  }

  update(id: number, updateRegionDto: UpdateRegionDto) {
    return `This action updates a #${id} region`;
  }

  remove(id: number) {
    return `This action removes a #${id} region`;
  }
  */
}
