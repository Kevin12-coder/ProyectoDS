import { Controller, Get, Post, UseGuards } from '@nestjs/common';
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
  async create(): Promise<void> {
    const products: Product[] = [
      { id: 1, name: 'Camiseta básica', price: 19.99, type: 'Shirt', brand: 'Hanes', color: 'Blanco', size: 'Mediano' },
  { id: 2, name: 'Camiseta estampada', price: 29.99, type: 'Shirt', brand: 'Levi\'s', color: 'Negro', size: 'Grande' },
  { id: 3, name: 'Camiseta de manga larga', price: 34.99, type: 'Shirt', brand: 'Gap', color: 'Azul', size: 'Mediano' },
  { id: 4, name: 'Camiseta deportiva', price: 24.99, type: 'Shirt', brand: 'Nike', color: 'Gris', size: 'Pequeño' },
  { id: 5, name: 'Sudadera con capucha', price: 49.99, type: 'Hoodie', brand: 'Adidas', color: 'Negro', size: 'Grande' },
  { id: 6, name: 'Sudadera sin capucha', price: 39.99, type: 'Hoodie', brand: 'Under Armour', color: 'Rojo', size: 'Mediano' },
  { id: 7, name: 'Chaqueta deportiva', price: 59.99, type: 'Jacket', brand: 'Puma', color: 'Verde', size: 'Grande' },
  { id: 8, name: 'Pantalones vaqueros', price: 69.99, type: 'Jeans', brand: 'Levi\'s', color: 'Azul', size: 'Mediano' },
  { id: 9, name: 'Pantalones chinos', price: 54.99, type: 'Pants', brand: 'Dockers', color: 'Beige', size: 'Grande' },
  { id: 10, name: 'Pantalones deportivos', price: 44.99, type: 'Pants', brand: 'Nike', color: 'Negro', size: 'Mediano' },
  { id: 11, name: 'Shorts deportivos', price: 29.99, type: 'Shorts', brand: 'Under Armour', color: 'Gris', size: 'Pequeño' },
  { id: 12, name: 'Falda casual', price: 39.99, type: 'Skirt', brand: 'Zara', color: 'Negro', size: 'Mediano' },
  { id: 13, name: 'Vestido de verano', price: 49.99, type: 'Dress', brand: 'H&M', color: 'Azul', size: 'Grande' },
  { id: 14, name: 'Blusa elegante', price: 34.99, type: 'Blouse', brand: 'Forever 21', color: 'Blanco', size: 'Mediano' },
  { id: 15, name: 'Polo clásico', price: 29.99, type: 'Polo', brand: 'Ralph Lauren', color: 'Verde', size: 'Grande' },
  { id: 16, name: 'Gorra deportiva', price: 19.99, type: 'Cap', brand: 'New Era', color: 'Negro', size: 'Pequeño' },
  { id: 17, name: 'Bufanda de lana', price: 24.99, type: 'Scarf', brand: 'Calvin Klein', color: 'Gris', size: 'Mediano' },
  { id: 18, name: 'Guantes térmicos', price: 14.99, type: 'Gloves', brand: 'Columbia', color: 'Negro', size: 'Grande' },
  { id: 19, name: 'Calcetines deportivos', price: 9.99, type: 'Socks', brand: 'Nike', color: 'Blanco', size: 'Mediano' },
  { id: 20, name: 'Zapatillas de running', price: 79.99, type: 'Shoes', brand: 'Asics', color: 'Azul', size: 'Grande' },
  { id: 21, name: 'Botas de invierno', price: 89.99, type: 'Boots', brand: 'Timberland', color: 'Marrón', size: 'Mediano' },
  { id: 22, name: 'Sandalias cómodas', price: 49.99, type: 'Sandals', brand: 'Crocs', color: 'Negro', size: 'Grande' },
  { id: 23, name: 'Mochila resistente', price: 59.99, type: 'Backpack', brand: 'JanSport', color: 'Azul', size: 'Grande' },
  { id: 24, name: 'Bolso elegante', price: 39.99, type: 'Handbag', brand: 'Michael Kors', color: 'Negro', size: 'Mediano' },
  { id: 25, name: 'Bufanda de seda', price: 29.99, type: 'Scarf', brand: 'Hermès', color: 'Rojo', size: 'Mediano' },
  { id: 26, name: 'Sombrero de paja', price: 19.99, type: 'Hat', brand: 'Goorin Bros', color: 'Beige', size: 'Grande' },
  { id: 27, name: 'Gafas de sol polarizadas', price: 69.99, type: 'Sunglasses', brand: 'Ray-Ban', color: 'Negro', size: 'Mediano' },
  { id: 28, name: 'Pulsera de cuero', price: 14.99, type: 'Bracelet', brand: 'Fossil', color: 'Marrón', size: 'Pequeño' },
  { id: 29, name: 'Collar elegante', price: 24.99, type: 'Necklace', brand: 'Tiffany & Co.', color: 'Plata', size: 'Mediano' },
  { id: 30, name: 'Reloj deportivo', price: 99.99, type: 'Watch', brand: 'Casio', color: 'Negro', size: 'Grande' },
  { id: 31, name: 'Pijama suave', price: 39.99, type: 'Pajamas', brand: 'Victoria\'s Secret', color: 'Rosa', size: 'Grande' },
  { id: 32, name: 'Bañador moderno', price: 49.99, type: 'Swimsuit', brand: 'Speedo', color: 'Azul', size: 'Mediano' },
  { id: 33, name: 'Corbata elegante', price: 19.99, type: 'Tie', brand: 'Hugo Boss', color: 'Negro', size: 'Grande' },
  { id: 34, name: 'Cinturón clásico', price: 29.99, type: 'Belt', brand: 'Gucci', color: 'Marrón', size: 'Mediano' },
  { id: 35, name: 'Gorra de béisbol', price: 14.99, type: 'Cap', brand: 'Adidas', color: 'Blanco', size: 'Pequeño' },
  { id: 36, name: 'Gafas de lectura', price: 9.99, type: 'Glasses', brand: 'Warby Parker', color: 'Negro', size: 'Mediano' },
  { id: 37, name: 'Paraguas resistente', price: 19.99, type: 'Umbrella', brand: 'Totes', color: 'Azul', size: 'Grande' },
  { id: 38, name: 'Bufanda de cachemira', price: 59.99, type: 'Scarf', brand: 'Burberry', color: 'Gris', size: 'Mediano' },
  { id: 39, name: 'Pantalones cortos', price: 24.99, type: 'Shorts', brand: 'Vans', color: 'Azul', size: 'Grande' },
  { id: 40, name: 'Pulsera de plata', price: 34.99, type: 'Bracelet', brand: 'Pandora', color: 'Plateado', size: 'Mediano' }
    ];
    
    await this.productsService.create(products);
  }
}