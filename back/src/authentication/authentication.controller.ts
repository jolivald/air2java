import {
  Body,
  Req,
  Controller,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { RegisterAppuserDto } from './dto/register-appuser.dto';
import { RequestWithUser } from './requestWithUser.interface';
import { LocalAuthenticationGuard } from './localAuthentication.guard';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('register')
  async register(@Body() registrationData: RegisterAppuserDto) {
    return this.authenticationService.register(registrationData);
  }

  @HttpCode(200)
  @UseGuards(LocalAuthenticationGuard)
  @Post('login')
  async logIn(@Req() request: RequestWithUser) {
    const {
      idAppuser: userid,
      typeAppuser: usertype,
      nameAppuser: username,
    } = request.user;
    return { userid, usertype, username };
  }
}
