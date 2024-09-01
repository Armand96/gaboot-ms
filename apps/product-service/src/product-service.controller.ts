import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductServiceService } from './product-service.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller()
export class ProductServiceController {
    constructor(private readonly productService: ProductServiceService) { }

    @Post()
    create(@Body() createProductDto: CreateProductDto) {
        return this.productService.createProduct(createProductDto);
    }

    @Get()
    getAll() {
        return this.productService.getAllProducts();
    }

    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.productService.getOneProduct(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
        return this.productService.updateProduct(+id, updateProductDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.productService.deleteProduct(+id);
    }


}
