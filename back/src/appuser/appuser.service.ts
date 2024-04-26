import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appuser } from './entities/appuser.entity';
import { CreateAppuserDto } from './dto/create-appuser.dto';
import { UpdateAppuserDto } from './dto/update-appuser.dto';

@Injectable()
export class AppuserService {
  constructor(
    @InjectRepository(Appuser)
    private appuserRepository: Repository<Appuser>,
  ) {}

  async create(userData: CreateAppuserDto) {
    const newUser = this.appuserRepository.create({
      nameAppuser: userData.name,
      passwordAppuser: userData.password
    });
    await this.appuserRepository.save(newUser);
    return newUser;
  }

  findAll() {
    return `This action returns all appuser`;
  }

  // TODO: add guard
  async findOne(id: number) {
    const user = await this.appuserRepository.findOneBy({ idAppuser: id });
    if (user) {
      return user;
    }
    throw new HttpException('User with this id does not exist', HttpStatus.NOT_FOUND);
  }

  update(id: number, updateAppuserDto: UpdateAppuserDto) {
    return `This action updates a #${id} appuser`;
  }

  remove(id: number) {
    return `This action removes a #${id} appuser`;
  }

  async getByName(name: string) {
    const user = await this.appuserRepository.findOneBy({ nameAppuser: name });
    if (user) {
      return user;
    }
    throw new HttpException('User with this name does not exist', HttpStatus.NOT_FOUND);
  }
}
