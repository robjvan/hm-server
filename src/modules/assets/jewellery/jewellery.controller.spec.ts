import { Test, TestingModule } from '@nestjs/testing';
import { JewelleryController } from './jewellery.controller';
import { JewelleryService } from './jewellery.service';

describe('JewelleryController', () => {
  let controller: JewelleryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JewelleryController],
      providers: [JewelleryService],
    }).compile();

    controller = module.get<JewelleryController>(JewelleryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
