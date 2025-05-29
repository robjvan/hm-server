import { Controller } from '@nestjs/common';
import { AppliancesService } from './appliances.service';

@Controller('appliances')
export class AppliancesController {
  constructor(private readonly appliancesService: AppliancesService) {}
}
