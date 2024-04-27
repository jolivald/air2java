import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthenticationService } from './authentication.service';
import { Appuser } from 'src/appuser/entities/appuser.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authenticationService: AuthenticationService) {
    super();
  }

  async validate(username: string, password: string): Promise<Appuser> {
    return this.authenticationService.getAuthenticatedUser(username, password);
  }
}
