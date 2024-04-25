import { Module } from '@nestjs/common';
import { AppuserService } from './appuser.service';
import { AppuserController } from './appuser.controller';

@Module({
  controllers: [AppuserController],
  providers: [AppuserService],
})
export class AppuserModule {}
