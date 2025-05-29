import { Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('metrics')
  getMetrics() {
    return this.adminService.getMetrics();
  }

  @Patch('/promote/:userId')
  promoteUserToAdmin(@Param('userId') userId: number) {
    console.log(userId);
  }

  @Delete('/deactivate/:userId')
  deactivateUserById(@Param('userId') userId: number) {
    console.log(userId);
  }
}
