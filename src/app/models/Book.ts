import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  ManyToOne,
  JoinColumn,
  UpdateDateColumn,
  CreateDateColumn
} from 'typeorm';

import User from './User';

@Entity('books')
class Book {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('mediumtext')
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => User, owner => owner.books, { 
    eager: true, 
    nullable: false 
  })
  @JoinColumn({ name: "open_by" })
  owner: User;

}

export default Book;