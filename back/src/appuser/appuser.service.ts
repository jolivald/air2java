import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from "@dataui/crud-typeorm";
import { Repository } from 'typeorm';
import { Appuser } from './entities/appuser.entity';
import { CreateAppuserDto } from './dto/create-appuser.dto';
import { UpdateAppuserDto } from './dto/update-appuser.dto';

@Injectable()
export class AppuserService extends TypeOrmCrudService<Appuser> {
  constructor(
    @InjectRepository(Appuser)
    private appuserRepository: Repository<Appuser>,
  ) {
    super(appuserRepository);
  }

  
  async create(userData: CreateAppuserDto) {
    const newUser = this.appuserRepository.create(userData, /*{
      nameAppuser: userData.name,
      typeAppuser: userData.type,
      passwordAppuser: userData.password,
    }*/);
    await this.appuserRepository.save(newUser);
    return newUser;
  }

  async getByName(name: string) {
    const user = await this.appuserRepository.findOneBy({ /*nameAppuser: */name });
    if (user) {
      return user;
    }
    throw new HttpException(
      'User with this name does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  /*

  findAll() {
    return this.appuserRepository.find();
    //return `This action returns all appuser`;
  }

  // TODO: add guard
  async findOne(id: number) {
    //const { id } = options;
    const user = await this.appuserRepository.findOneBy({ idAppuser: id });
    if (user) {
      return user;
    }
    throw new HttpException(
      'User with this id does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateAppuserDto: UpdateAppuserDto) {
    return `This action updates a #${id} appuser`;
  }

  remove(id: number) {
    return `This action removes a #${id} appuser`;
  }

  */
}
