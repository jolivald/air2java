import { Module } from '@nestjs/common';
import { SpecialisationService } from './specialisation.service';
import { SpecialisationController } from './specialisation.controller';

@Module({
  controllers: [SpecialisationController],
  providers: [SpecialisationService],
})
export class SpecialisationModule {}
