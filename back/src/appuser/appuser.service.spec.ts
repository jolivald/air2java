import { Test, TestingModule } from '@nestjs/testing';
import { AppuserService } from './appuser.service';

describe('AppuserService', () => {
  let service: AppuserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppuserService],
    }).compile();

    service = module.get<AppuserService>(AppuserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
