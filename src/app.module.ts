import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './modules/auth/auth.module';
import { AdminModule } from './modules/admin/admin.module';
import { UsersModule } from './modules/users/users.module';
import { BooksModule } from './modules/assets/books/books.module';
import { MusicModule } from './modules/assets/music/music.module';
import { VehiclesModule } from './modules/assets/vehicles/vehicles.module';
import { ElectronicsModule } from './modules/assets/electronics/electronics.module';
import { AppliancesModule } from './modules/assets/appliances/appliances.module';
import { ClothesModule } from './modules/assets/clothes/clothes.module';
import { JewelleryModule } from './modules/assets/jewellery/jewellery.module';
import { VideosModule } from './modules/assets/videos/videos.module';
import { LocationsModule } from './modules/locations/locations.module';
import { EventsModule } from './modules/events/events.module';

@Module({
  imports: [
    AuthModule,
    AdminModule,
    UsersModule,
    BooksModule,
    MusicModule,
    VehiclesModule,
    ElectronicsModule,
    AppliancesModule,
    ClothesModule,
    JewelleryModule,
    VideosModule,
    LocationsModule,
    EventsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
