import { Test, TestingModule } from '@nestjs/testing';

import { AppController, HealthCheckController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController, HealthCheckController],
      providers: [AppService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to api!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getMessage()).toEqual({ message: 'Welcome to api!' });
    });
  });
});
