import { Test, TestingModule } from '@nestjs/testing';
import { JwtModule } from '@nestjs/jwt';
import { AuthenticationService } from './authentication.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from '../database/database.module';
import { Appuser } from '../appuser/entities/appuser.entity';

describe('AuthenticationService', () => {
  let authenticationService: AuthenticationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
        DatabaseModule,
        JwtModule.registerAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          global: true,
          useFactory: async (configService: ConfigService) => ({
            secret: configService.get('JWT_SECRET'),
            signOptions: {
              expiresIn: `${configService.get('JWT_TTL')}s`,
            },
          }),
        }),
      ],
      providers: [AuthenticationService],
    }).compile();

    authenticationService = await module.get<AuthenticationService>(AuthenticationService);
  });

  it('should be defined', () => {
    expect(authenticationService).toBeDefined();
  });

  describe('when authenticating an user', () => {
    it('should return the user instance', async () => {
      const authenticatedUser = await authenticationService.getAuthenticatedUser('root', '12345678');
      expect(authenticatedUser).toBeInstanceOf(Appuser);
    });
  });
  /*
  * register
  * getAuthenticatedUser
  * verifyPassword
  * getAuthenticatedToken
  */

});
