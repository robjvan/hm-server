import { Controller } from '@nestjs/common';
import { JewelleryService } from './jewellery.service';

@Controller('jewellery')
export class JewelleryController {
  constructor(private readonly jewelleryService: JewelleryService) {}
}
