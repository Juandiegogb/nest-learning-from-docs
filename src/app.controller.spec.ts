import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateCatDto } from './create-cat.dto';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });

    it('testing', () => {
      const testCat: CreateCatDto = {
        name: 'nina',
        age: 8,
        breed: 'test',
      };
      expect(appController.createCat(testCat)).toBe(JSON.stringify(testCat));
    });
  });
});
