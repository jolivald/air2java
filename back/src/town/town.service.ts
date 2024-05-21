import { Injectable } from '@nestjs/common';
import { CreateTownDto } from './dto/create-town.dto';
import { UpdateTownDto } from './dto/update-town.dto';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Town } from './entities/town.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TownService extends TypeOrmCrudService<Town> {
  constructor(
    @InjectRepository(Town)
    private townRepository: Repository<Town>,
  ) {
    super(townRepository);
  }
  /*
  create(createTownDto: CreateTownDto) {
    return 'This action adds a new town';
  }

  findAll() {
    return `This action returns all town`;
  }

  findOne(id: number) {
    return `This action returns a #${id} town`;
  }

  update(id: number, updateTownDto: UpdateTownDto) {
    return `This action updates a #${id} town`;
  }

  remove(id: number) {
    return `This action removes a #${id} town`;
  }
  */
}
