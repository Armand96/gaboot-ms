import { Test, TestingModule } from '@nestjs/testing';
import { BuyerServiceController } from './buyer-service.controller';
import { BuyerServiceService } from './buyer-service.service';

describe('BuyerServiceController', () => {
  let buyerServiceController: BuyerServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BuyerServiceController],
      providers: [BuyerServiceService],
    }).compile();

    buyerServiceController = app.get<BuyerServiceController>(BuyerServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(buyerServiceController.getHello()).toBe('Hello World!');
    });
  });
});
