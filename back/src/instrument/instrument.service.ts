import { Injectable } from '@nestjs/common';
import { CreateInstrumentDto } from './dto/create-instrument.dto';
import { UpdateInstrumentDto } from './dto/update-instrument.dto';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Instrument } from './entities/instrument.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InstrumentService extends TypeOrmCrudService<Instrument>  {
  constructor(
    @InjectRepository(Instrument)
    private instrumentRepository: Repository<Instrument>,
  ) {
    super(instrumentRepository);
  }
}
/*
@Injectable()
export class InstrumentService {
  create(createInstrumentDto: CreateInstrumentDto) {
    return 'This action adds a new instrument';
  }

  findAll() {
    return `This action returns all instrument`;
  }

  findOne(id: number) {
    return `This action returns a #${id} instrument`;
  }

  update(id: number, updateInstrumentDto: UpdateInstrumentDto) {
    return `This action updates a #${id} instrument`;
  }

  remove(id: number) {
    return `This action removes a #${id} instrument`;
  }
}
*/
