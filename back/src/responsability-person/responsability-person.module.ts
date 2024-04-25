import { Module } from '@nestjs/common';
import { ResponsabilityPersonService } from './responsability-person.service';
import { ResponsabilityPersonController } from './responsability-person.controller';

@Module({
  controllers: [ResponsabilityPersonController],
  providers: [ResponsabilityPersonService],
})
export class ResponsabilityPersonModule {}
