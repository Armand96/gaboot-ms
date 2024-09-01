import { Injectable } from '@nestjs/common';

@Injectable()
export class BuyerServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
