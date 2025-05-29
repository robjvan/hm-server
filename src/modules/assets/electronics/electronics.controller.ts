import { Controller } from '@nestjs/common';
import { ElectronicsService } from './electronics.service';

@Controller('electronics')
export class ElectronicsController {
  constructor(private readonly electronicsService: ElectronicsService) {}
}
