import { Module } from '@nestjs/common';
import { SpecialisationService } from './specialisation.service';
import { SpecialisationController } from './specialisation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Specialisation } from './entities/specialisation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Specialisation])],
  controllers: [SpecialisationController],
  providers: [SpecialisationService],
})
export class SpecialisationModule {}
