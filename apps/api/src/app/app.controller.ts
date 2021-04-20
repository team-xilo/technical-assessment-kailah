import { Body, Controller, Get, Param, Post } from '@nestjs/common';

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

@Controller()
export class HealthCheckController {
  constructor(private readonly appService: AppService) {}

  @Get('health-check/is-corrupted/:id')
  isCorruptedByUser(@Param() params) {
    return this.appService.isCorruptedByUser(params.id);
  }

  @Post('health-check/is-corrupted')
  isCorruptedByFilesystem(@Body() fileSystem: any) {
    return this.appService.isCorruptedByFilesystem(fileSystem);
  }
  
  @Get('health-check/corrupted/:id')
  getCorrupted(@Param() params) {
    return this.appService.getCorrupted(params.id);
  }

  @Get('health-check/uncorrupted/:id')
  getUncorrupted(@Param() params) {
    return this.appService.getUncorrupted(params.id);
  }
  
}