import { Injectable } from '@nestjs/common';
import { CreateSpecialisationDto } from './dto/create-specialisation.dto';
import { UpdateSpecialisationDto } from './dto/update-specialisation.dto';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Specialisation } from './entities/specialisation.entity';

@Injectable()
export class SpecialisationService extends TypeOrmCrudService<Specialisation>  {
  constructor(
    @InjectRepository(Specialisation)
    private specialisationRepository: Repository<Specialisation>,
  ) {
    super(specialisationRepository);
  }
}
/*
@Injectable()
export class SpecialisationService {
  create(createSpecialisationDto: CreateSpecialisationDto) {
    return 'This action adds a new specialisation';
  }

  findAll() {
    return `This action returns all specialisation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} specialisation`;
  }

  update(id: number, updateSpecialisationDto: UpdateSpecialisationDto) {
    return `This action updates a #${id} specialisation`;
  }

  remove(id: number) {
    return `This action removes a #${id} specialisation`;
  }
}
*/