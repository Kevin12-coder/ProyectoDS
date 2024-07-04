import { BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

export interface CoreEntityI {
  id: number;
}

export class CoreEntity extends BaseEntity implements CoreEntityI {
  @PrimaryGeneratedColumn()
  id: number;
}
