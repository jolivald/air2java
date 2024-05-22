import { Test, TestingModule } from '@nestjs/testing';
import { ResponsabilityPersonService } from './responsability-person.service';

describe('ResponsabilityPersonService', () => {
  let service: ResponsabilityPersonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResponsabilityPersonService],
    }).compile();

    service = module.get<ResponsabilityPersonService>(
      ResponsabilityPersonService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
