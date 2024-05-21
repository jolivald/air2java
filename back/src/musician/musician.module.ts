import { Module } from '@nestjs/common';
import { MusicianService } from './musician.service';
import { MusicianController } from './musician.controller';
import { Musician } from './entities/musician.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Musician])],
  controllers: [MusicianController],
  providers: [MusicianService],
})
export class MusicianModule {}
