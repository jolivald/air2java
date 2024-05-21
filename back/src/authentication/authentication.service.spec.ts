import { Test, TestingModule } from '@nestjs/testing';
import { JwtModule } from '@nestjs/jwt';
import { AuthenticationService } from './authentication.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Appuser } from '../appuser/entities/appuser.entity';
import { AppuserService } from '../appuser/appuser.service';
import { AppuserModule } from '../appuser/appuser.module';
import { InjectRepository, TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { DatabaseModule } from '../database/database.module';

describe('AuthenticationService', () => {
  let authenticationService: AuthenticationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        //AppuserModule,
        ConfigModule.forRoot(),
        // DatabaseModule,
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
        DatabaseModule,
        TypeOrmModule.forFeature([Appuser]),
      ],
      providers: [
        AppuserService,
        AuthenticationService,
        /*{
          provide: getRepositoryToken(Appuser),
          useValue: {}
        }*/
      ],
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

  describe('when creating a user\'s access token', () => {
    let authenticatedUser: Appuser;
    let accessToken: string;
    beforeEach(async () => {
      authenticatedUser = await authenticationService.getAuthenticatedUser('root', '12345678');
      accessToken = authenticationService.getAuthenticatedToken(authenticatedUser);
    });
    it('should return a string', () => {
      expect(typeof accessToken).toBe('string');
    });
    it('should return a token of the correct length', () => {
      expect(accessToken.length).toBe(176);
    });
    it('should return a well formed token', () => {
      expect(accessToken.split('.').map(str => str.length)).toEqual([36, 95, 43]);
    });
  });

});
