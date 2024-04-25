import { Injectable } from '@nestjs/common';
import { CreateAppuserDto } from './dto/create-appuser.dto';
import { UpdateAppuserDto } from './dto/update-appuser.dto';

@Injectable()
export class AppuserService {
  create(createAppuserDto: CreateAppuserDto) {
    return 'This action adds a new appuser';
  }

  findAll() {
    return `This action returns all appuser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} appuser`;
  }

  update(id: number, updateAppuserDto: UpdateAppuserDto) {
    return `This action updates a #${id} appuser`;
  }

  remove(id: number) {
    return `This action removes a #${id} appuser`;
  }
}
