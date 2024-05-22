import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { AppuserService } from '../appuser/appuser.service';
import { TokenPayload } from './tokenPayload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly appuserService: AppuserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        //ExtractJwt.fromUrlQueryParameter("secret_token"),
        //ExtractJwt.fromHeader("secret_token"),
        //ExtractJwt.fromAuthHeaderAsBearerToken(),
        (request: Request) => {
          return request?.cookies?.Authentication;
        },
      ]),
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  async validate({ name }: TokenPayload) {
    return this.appuserService.getByName(name);
  }
}
