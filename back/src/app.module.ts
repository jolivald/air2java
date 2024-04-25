import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AppuserModule } from './appuser/appuser.module';
import { PersonModule } from './person/person.module';
import { BandModule } from './band/band.module';
import { FestivalModule } from './festival/festival.module';
import { MusicianModule } from './musician/musician.module';
import { ResponsabilityPersonModule } from './responsability-person/responsability-person.module';
import { TownModule } from './town/town.module';
import { SpecialisationModule } from './specialisation/specialisation.module';
import { PerformanceModule } from './performance/performance.module';
import { TrackModule } from './track/track.module';
import { InstrumentModule } from './instrument/instrument.module';
import { SpecialtyModule } from './specialty/specialty.module';
import { RegionModule } from './region/region.module';
import { StateModule } from './state/state.module';
import { TypeModule } from './type/type.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    AppuserModule,
    PersonModule,
    BandModule,
    FestivalModule,
    MusicianModule,
    ResponsabilityPersonModule,
    TownModule,
    SpecialisationModule,
    PerformanceModule,
    TrackModule,
    InstrumentModule,
    SpecialtyModule,
    RegionModule,
    StateModule,
    TypeModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
