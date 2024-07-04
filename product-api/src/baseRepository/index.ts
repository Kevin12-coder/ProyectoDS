import { CoreEntity } from '../entities/core.entity';
import { DeepPartial, FindOptionsWhere, Repository } from 'typeorm';

export class BaseRepository<T extends CoreEntity> {
  repository: Repository<T>;

  async findAll(): Promise<T[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<T | null> {
    return this.repository.findOneBy({ id } as FindOptionsWhere<T>);
  }

  async create(object: DeepPartial<T>): Promise<T> {
    return this.repository.save(object);
  }
}
