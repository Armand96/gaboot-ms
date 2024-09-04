import { Controller, Get, Inject } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class ApiGatewayController {
    constructor(
        private readonly apiGatewayService: ApiGatewayService,
        @Inject('PRODUCT_SERVICE') private client: ClientProxy
    ) { }

    @Get('/test')
    getHello(): string {
        return this.apiGatewayService.getHello();
    }

    @Get('/products')
    getAllProducts() {
        return this.client.send('getAllProduct', {});
    }
}
