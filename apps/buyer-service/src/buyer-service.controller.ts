import { Controller, Get } from '@nestjs/common';
import { BuyerServiceService } from './buyer-service.service';

@Controller()
export class BuyerServiceController {
  constructor(private readonly buyerServiceService: BuyerServiceService) {}

  @Get()
  getHello(): string {
    return this.buyerServiceService.getHello();
  }
}
