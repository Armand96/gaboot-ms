import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductServiceService } from './product-service.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class ProductServiceController {
    constructor(private readonly productService: ProductServiceService) { }

    // @Post()
    @MessagePattern('createProduct')
    create(@Payload() createProductDto: CreateProductDto) {
        return this.productService.createProduct(createProductDto);
    }

    // @Get()
    @MessagePattern('getAllProduct')
    getAll() {
        return this.productService.getAllProducts();
    }

    // @Get(':id')
    @MessagePattern('getOneProduct')
    getOne(@Param('id') id: string) {
        return this.productService.getOneProduct(+id);
    }

    // @Patch(':id')
    @MessagePattern('updateProduct')
    update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
        return this.productService.updateProduct(+id, updateProductDto);
    }

    // @Delete(':id')
    @MessagePattern('deleteProduct')
    delete(@Param('id') id: string) {
        return this.productService.deleteProduct(+id);
    }


}
