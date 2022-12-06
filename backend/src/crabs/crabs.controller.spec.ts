import { Test, TestingModule } from '@nestjs/testing';
import { CrabsController } from './crabs.controller';

describe('CrabsController', () => {
  let controller: CrabsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrabsController],
    }).compile();

    controller = module.get<CrabsController>(CrabsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
