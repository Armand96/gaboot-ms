import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';
import { ClientProxy } from '@nestjs/microservices';
import { CreateProductDto } from '@app/general';

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

    @Get('/products/:id')
    getOneProduct(@Param() id: number) {
        return this.client.send('getOneProduct', id);
    }

    @Post('/products')
    createProduct(@Body() createProductDto: CreateProductDto){

    }
}
