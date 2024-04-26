import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppuserService } from './appuser.service';
import { AppuserController } from './appuser.controller';
import { Appuser } from './entities/appuser.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Appuser])
  ],
  controllers: [AppuserController],
  providers: [AppuserService],
  exports: [AppuserService]
})
export class AppuserModule {}
