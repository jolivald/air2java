import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { AppuserService } from 'src/appuser/appuser.service';
import * as bcrypt from 'bcrypt';
import { RegisterAppuserDto } from './dto/register-appuser.dto';

@Injectable()
export class AuthenticationService {
  constructor(private readonly appuserService: AppuserService) {}

  public async register(registrationData: RegisterAppuserDto) {
    const hashedPassword = await bcrypt.hash(registrationData.password, 10);
    try {
      const createdUser = await this.appuserService.create({
        type: 'guest',
        name: registrationData.name,
        password: hashedPassword,
      });
      return createdUser;
    } catch (error) {
      // TODO: move constant to mariadb error enum
      if (error?.errno === 1062) {
        throw new HttpException(
          'User with that name already exists',
          HttpStatus.BAD_REQUEST,
        );
      }
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  public async getAuthenticatedUser(name: string, plainTextPassword: string) {
    try {
      const user = await this.appuserService.getByName(name);
      await this.verifyPassword(plainTextPassword, user.passwordAppuser);
      return user;
    } catch (error) {
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  private async verifyPassword(
    plainTextPassword: string,
    hashedPassword: string,
  ) {
    const isPasswordMatching = await bcrypt.compare(
      plainTextPassword,
      hashedPassword,
    );
    if (!isPasswordMatching) {
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
