import { Injectable } from '@nestjs/common';
// import { CreatePerformanceDto } from './dto/create-performance.dto';
// import { UpdatePerformanceDto } from './dto/update-performance.dto';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Performance } from './entities/performance.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PerformanceService extends TypeOrmCrudService<Performance>  {
  constructor(
    @InjectRepository(Performance)
    private performanceRepository: Repository<Performance>,
  ) {
    super(performanceRepository);
  }
}
/*
@Injectable()
export class PerformanceService {
  create(createPerformanceDto: CreatePerformanceDto) {
    return 'This action adds a new performance';
  }

  findAll() {
    return `This action returns all performance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} performance`;
  }

  update(id: number, updatePerformanceDto: UpdatePerformanceDto) {
    return `This action updates a #${id} performance`;
  }

  remove(id: number) {
    return `This action removes a #${id} performance`;
  }
}
*/
