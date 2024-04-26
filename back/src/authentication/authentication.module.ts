import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AppuserModule } from 'src/appuser/appuser.module';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { LocalStrategy } from './local.strategy';
 

@Module({
  imports: [AppuserModule, PassportModule],
  providers: [AuthenticationService, LocalStrategy],
  controllers: [AuthenticationController]
})
export class AuthenticationModule {}
