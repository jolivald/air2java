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
//import { AppuserService } from 'src/appuser/appuser.service';
import JwtAuthenticationGuard from './jwtAuthentication.guard';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';
import { Role } from './role.enum';

@Controller('auth')
@UseInterceptors(PasswordInterceptor)
export class AuthenticationController {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly configService: ConfigService,
    //private readonly appuserService: AppuserService,
  ) {}

  @Post('register')
  @Roles(Role.Admin)
  @UseGuards(JwtAuthenticationGuard, RolesGuard)
  async register(@Body() registrationData: RegisterAppuserDto) {
    return this.authenticationService.register(registrationData);
  }

  @Post('login')
  @HttpCode(200)
  @UseGuards(LocalAuthenticationGuard)
  async logIn(
    @Req() { user }: RequestWithUser,
    @Res({ passthrough: true }) response: Response,
  ) {
    const token = this.authenticationService.getAuthenticatedToken(user);
    response.cookie('Authentication', token, {
      httpOnly: true,
      path: '/',
      //maxAge: this.configService.get('JWT_TTL'),
      sameSite: 'none'
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
