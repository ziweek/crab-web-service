import { Test, TestingModule } from '@nestjs/testing';
import { CrabsService } from './crabs.service';

describe('CrabsService', () => {
  let service: CrabsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrabsService],
    }).compile();

    service = module.get<CrabsService>(CrabsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
