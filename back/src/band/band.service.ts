import { Injectable } from '@nestjs/common';
import { CreateBandDto } from './dto/create-band.dto';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Band } from './entities/band.entity';
// import { UpdateBandDto } from './dto/update-band.dto';
// import { Band } from './entities/band.entity';

@Injectable()
export class BandService extends TypeOrmCrudService<Band>  {
  constructor(
    @InjectRepository(Band)
    private bandRepository: Repository<Band>,
  ) {
    super(bandRepository);
  }
}
/*
@Injectable()
export class BandService {
  create(createBandDto: CreateBandDto) {
    return 'This action adds a new band';
  }

  findAll() {
    return `This action returns all band`;
  }

  findOne(id: number) {
    return `This action returns a #${id} band`;
  }

  update(id: number, updateBandDto: UpdateBandDto) {
    return `This action updates a #${id} band`;
  }

  remove(id: number) {
    return `This action removes a #${id} band`;
  }
}
*/
