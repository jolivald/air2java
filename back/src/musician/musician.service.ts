import { Injectable } from '@nestjs/common';
import { CreateMusicianDto } from './dto/create-musician.dto';
import { UpdateMusicianDto } from './dto/update-musician.dto';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Musician } from './entities/musician.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MusicianService extends TypeOrmCrudService<Musician>  {
  constructor(
    @InjectRepository(Musician)
    private musicianRepository: Repository<Musician>,
  ) {
    super(musicianRepository);
  }
}
/*
@Injectable()
export class MusicianService {
  create(createMusicianDto: CreateMusicianDto) {
    return 'This action adds a new musician';
  }

  findAll() {
    return `This action returns all musician`;
  }

  findOne(id: number) {
    return `This action returns a #${id} musician`;
  }

  update(id: number, updateMusicianDto: UpdateMusicianDto) {
    return `This action updates a #${id} musician`;
  }

  remove(id: number) {
    return `This action removes a #${id} musician`;
  }
}
*/
