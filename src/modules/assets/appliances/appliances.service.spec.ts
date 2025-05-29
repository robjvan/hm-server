import { Test, TestingModule } from '@nestjs/testing';
import { AppliancesService } from './appliances.service';

describe('AppliancesService', () => {
  let service: AppliancesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppliancesService],
    }).compile();

    service = module.get<AppliancesService>(AppliancesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
