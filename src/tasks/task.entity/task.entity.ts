import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Tasks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column()
  start_date: Date;

  @Column()
  due_date: Date;

  @Column()
  status: string;
}
