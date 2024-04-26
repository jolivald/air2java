import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthenticationService } from './authentication.service';
import { Appuser } from 'src/appuser/entities/appuser.entity';
 
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authenticationService: AuthenticationService) {
    super({
      usernameField: 'nameAppuser',
      passwordField: 'passwordAppuser',
    });
    console.log('local stratedy', this);
  }

  async validate(name: string, password: string): Promise<Appuser> {
    console.log('local validate', name);
    return this.authenticationService.getAuthenticatedUser(name, password);
  }
}