import { Module } from '@nestjs/common';
import { AppliancesService } from './appliances.service';
import { AppliancesController } from './appliances.controller';

@Module({
  controllers: [AppliancesController],
  providers: [AppliancesService],
})
export class AppliancesModule {}
