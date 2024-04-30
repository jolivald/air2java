import {
  Body,
  Req,
  Controller,
  HttpCode,
  Post,
  UseGuards,
  UseInterceptors,
  Res,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthenticationService } from './authentication.service';
import { RegisterAppuserDto } from './dto/register-appuser.dto';
import { RequestWithUser } from './requestWithUser.interface';
import { LocalAuthenticationGuard } from './localAuthentication.guard';
import { PasswordInterceptor } from 'src/transform/password.interceptor';
import { Response } from 'express';
import { AppuserService } from 'src/appuser/appuser.service';
import JwtAuthenticationGuard from './jwtAuthentication.guard';

@Controller('authentication')
@UseInterceptors(PasswordInterceptor)
export class AuthenticationController {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly appuserService: AppuserService,
    private readonly configService: ConfigService,
  ) {}

  @Post('register')
  async register(@Body() registrationData: RegisterAppuserDto) {
    return this.authenticationService.register(registrationData);
  }

  @HttpCode(200)
  @UseGuards(LocalAuthenticationGuard)
  @Post('login')
  async logIn(
    @Req() { user }: RequestWithUser,
    @Res({ passthrough: true }) response: Response,
  ) {
    const token = this.authenticationService.getAuthenticatedToken(user);
    response.cookie('Authentication', token, {
      httpOnly: true,
      path: '/',
      maxAge: this.configService.get('JWT_TTL'),
    });
    return user;
  }

  
  @UseGuards(JwtAuthenticationGuard)
  @Post('logout')
  async logOut(
    @Req() request: RequestWithUser,
    @Res() response: Response,
  ) {
    response.cookie('Authentication', '', {
      httpOnly: true,
      path: '/',
      maxAge: 0
    });
    return response.sendStatus(200);
  }
}
