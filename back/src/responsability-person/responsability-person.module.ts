import { Module } from '@nestjs/common';
import { ResponsabilityPersonService } from './responsability-person.service';
import { ResponsabilityPersonController } from './responsability-person.controller';
import { ResponsabilityPerson } from './entities/responsability-person.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ResponsabilityPerson])],
  controllers: [ResponsabilityPersonController],
  providers: [ResponsabilityPersonService],
})
export class ResponsabilityPersonModule {}
