import { Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('message')
  getMessage() {
    return this.appService.getData();
  }

  @Get('users/:id')
  getUserData(@Param() params) {
    return this.appService.getUserData(params.id);
  }
}
