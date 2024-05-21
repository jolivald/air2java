import { Module } from '@nestjs/common';
import { TownService } from './town.service';
import { TownController } from './town.controller';
import { Town } from './entities/town.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Town])],
  controllers: [TownController],
  providers: [TownService],
})
export class TownModule {}
