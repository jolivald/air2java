import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Person } from './entities/person.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { CreatePersonDto } from './dto/create-person.dto';
// import { UpdatePersonDto } from './dto/update-person.dto';

@Injectable()
export class PersonService extends TypeOrmCrudService<Person> {
    constructor(
      @InjectRepository(Person)
      private appuserRepository: Repository<Person>,
    ) {
      super(appuserRepository);
    }
  /*
  create(createPersonDto: CreatePersonDto) {
    return 'This action adds a new person';
  }

  findAll() {
    return `This action returns all person`;
  }

  findOne(id: number) {
    return `This action returns a #${id} person`;
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
  */
}
