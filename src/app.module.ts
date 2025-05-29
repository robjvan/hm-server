import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './modules/auth/auth.module';
import { AdminModule } from './modules/admin/admin.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [AuthModule, AdminModule, UsersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
