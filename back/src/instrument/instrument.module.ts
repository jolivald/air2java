import { Module } from '@nestjs/common';
import { InstrumentService } from './instrument.service';
import { InstrumentController } from './instrument.controller';
import { Instrument } from './entities/instrument.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Instrument])],
  controllers: [InstrumentController],
  providers: [InstrumentService],
})
export class InstrumentModule {}
