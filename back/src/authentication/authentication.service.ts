import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AppuserService } from '../appuser/appuser.service';
import * as bcrypt from 'bcrypt';
import { RegisterAppuserDto } from './dto/register-appuser.dto';
//import { TokenPayload } from './tokenPayload.interface';
import { Appuser } from '../appuser/entities/appuser.entity';
import { Mariadb } from './mariadb.enum';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly appuserService: AppuserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  public async register(registrationData: RegisterAppuserDto): Promise<Appuser> {
    const hashedPassword = await bcrypt.hash(registrationData.password, 10);
    try {
      const createdUser = await this.appuserService.create({
        type: 'guest',
        name: registrationData.name,
        password: hashedPassword,
      });
      return createdUser;
    } catch (error) {
      if (error?.errno === Mariadb.UniqueViolation) {
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
      await this.verifyPassword(plainTextPassword, user.password);
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

  public getAuthenticatedToken({ id, type, name, }: Appuser): string {
    return this.jwtService.sign({ id, type, name });
  }
}
