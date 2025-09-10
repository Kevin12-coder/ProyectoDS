import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from '../entities/product.entity';
import { AuthGuard } from 'src/middlewares/auth.middleware';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @UseGuards(new AuthGuard(3))
  @Get()
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Post()
  async create(@Body() productData: Product): Promise<Product> {
    return this.productsService.create(productData);
  }
}