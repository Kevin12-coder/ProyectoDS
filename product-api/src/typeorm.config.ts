import { DataSourceOptions } from 'typeorm';
import { ProductEntity } from '../src/entities/product';

const entities = [ProductEntity];

export const typeOrmConfig: DataSourceOptions = {
  type: 'sqlite',
  database: 'products.db',
  entities,
  synchronize: true,
};
