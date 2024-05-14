import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Festival } from './entities/festival.entity';
// import { CreateFestivalDto } from './dto/create-festival.dto';
// import { UpdateFestivalDto } from './dto/update-festival.dto';

@Injectable()
export class FestivalService extends TypeOrmCrudService<Festival>  {
  constructor(
    @InjectRepository(Festival)
    private festivalRepository: Repository<Festival>,
  ) {
    super(festivalRepository);
  }
  /*create(createFestivalDto: CreateFestivalDto) {
    return 'This action adds a new festival';
  }

  findAll() {
    return `This action returns all festival`;
  }

  findOne(id: number) {
    return `This action returns a #${id} festival`;
  }

  update(id: number, updateFestivalDto: UpdateFestivalDto) {
    return `This action updates a #${id} festival`;
  }

  remove(id: number) {
    return `This action removes a #${id} festival`;
  }*/
}
