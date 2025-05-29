import { Test, TestingModule } from '@nestjs/testing';
import { AppliancesController } from './appliances.controller';
import { AppliancesService } from './appliances.service';

describe('AppliancesController', () => {
  let controller: AppliancesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppliancesController],
      providers: [AppliancesService],
    }).compile();

    controller = module.get<AppliancesController>(AppliancesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
