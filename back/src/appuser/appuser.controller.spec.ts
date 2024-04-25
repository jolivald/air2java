import { Test, TestingModule } from '@nestjs/testing';
import { AppuserController } from './appuser.controller';
import { AppuserService } from './appuser.service';

describe('AppuserController', () => {
  let controller: AppuserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppuserController],
      providers: [AppuserService],
    }).compile();

    controller = module.get<AppuserController>(AppuserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
