import { Module } from '@nestjs/common';
import { BandService } from './band.service';
import { BandController } from './band.controller';
import { Band } from './entities/band.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Band])],
  controllers: [BandController],
  providers: [BandService],
})
export class BandModule {}
