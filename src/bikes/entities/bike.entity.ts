import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bike {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  make?: string;

  @Column()
  model?: string;

  @Column()
  year?: number;

  @Column()
  type?: string;
}
