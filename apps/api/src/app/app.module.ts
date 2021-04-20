import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { HealthCheckController } from './app.controller'
import { AppService } from './app.service';



@Module({
  imports: [],
  controllers: [AppController, HealthCheckController],
  providers: [AppService],
})
export class AppModule {}
