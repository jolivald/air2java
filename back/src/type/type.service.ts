import { Injectable } from '@nestjs/common';
// import { CreateTypeDto } from './dto/create-type.dto';
// import { UpdateTypeDto } from './dto/update-type.dto';
import { Type } from './entities/type.entity';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TypeService extends TypeOrmCrudService<Type>  {
  constructor(
    @InjectRepository(Type)
    private typeRepository: Repository<Type>,
  ) {
    super(typeRepository);
  }
}
/*
@Injectable()
export class TypeService {
  create(createTypeDto: CreateTypeDto) {
    return 'This action adds a new type';
  }

  findAll() {
    return `This action returns all type`;
  }

  findOne(id: number) {
    return `This action returns a #${id} type`;
  }

  update(id: number, updateTypeDto: UpdateTypeDto) {
    return `This action updates a #${id} type`;
  }

  remove(id: number) {
    return `This action removes a #${id} type`;
  }
}
*/