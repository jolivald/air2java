import { Injectable } from '@nestjs/common';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { State } from './entities/state.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StateService extends TypeOrmCrudService<State> {
  constructor(
    @InjectRepository(State)
    private stateRepository: Repository<State>,
  ) {
    super(stateRepository);
  }

  /*
  create(createStateDto: CreateStateDto) {
    return 'This action adds a new state';
  }

  findAll() {
    return `This action returns all state`;
  }

  findOne(id: number) {
    return `This action returns a #${id} state`;
  }

  update(id: number, updateStateDto: UpdateStateDto) {
    return `This action updates a #${id} state`;
  }

  remove(id: number) {
    return `This action removes a #${id} state`;
  }
  */
}
