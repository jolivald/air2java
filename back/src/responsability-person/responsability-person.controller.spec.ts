import { Test, TestingModule } from '@nestjs/testing';
import { ResponsabilityPersonController } from './responsability-person.controller';
import { ResponsabilityPersonService } from './responsability-person.service';

describe('ResponsabilityPersonController', () => {
  let controller: ResponsabilityPersonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResponsabilityPersonController],
      providers: [ResponsabilityPersonService],
    }).compile();

    controller = module.get<ResponsabilityPersonController>(
      ResponsabilityPersonController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
