import { Test, TestingModule } from '@nestjs/testing';
import { SpecialisationController } from './specialisation.controller';
import { SpecialisationService } from './specialisation.service';

describe('SpecialisationController', () => {
  let controller: SpecialisationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpecialisationController],
      providers: [SpecialisationService],
    }).compile();

    controller = module.get<SpecialisationController>(SpecialisationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
