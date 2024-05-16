import { Injectable } from '@nestjs/common';
import { CreateResponsabilityPersonDto } from './dto/create-responsability-person.dto';
import { UpdateResponsabilityPersonDto } from './dto/update-responsability-person.dto';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { ResponsabilityPerson } from './entities/responsability-person.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ResponsabilityPersonService extends TypeOrmCrudService<ResponsabilityPerson>  {
  constructor(
    @InjectRepository(ResponsabilityPerson)
    private festivalRepository: Repository<ResponsabilityPerson>,
  ) {
    super(festivalRepository);
  }
  /*
  create(createResponsabilityPersonDto: CreateResponsabilityPersonDto) {
    return 'This action adds a new responsabilityPerson';
  }

  findAll() {
    return `This action returns all responsabilityPerson`;
  }

  findOne(id: number) {
    return `This action returns a #${id} responsabilityPerson`;
  }

  update(
    id: number,
    updateResponsabilityPersonDto: UpdateResponsabilityPersonDto,
  ) {
    return `This action updates a #${id} responsabilityPerson`;
  }

  remove(id: number) {
    return `This action removes a #${id} responsabilityPerson`;
  }
  */
}
