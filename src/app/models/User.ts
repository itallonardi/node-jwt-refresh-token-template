import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  BeforeInsert, 
  BeforeUpdate,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

import bcrypt from 'bcryptjs';

import Book from './Book';
import DeniedToken from './DeniedToken';

@Entity('users')
class User {

  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column({ unique: true })
  email: string;
  
  @Column()
  password: string;

  @Column()
  fullname: string;

  @Column({ length: 30 })
  phone: string;

  @Column({ unique: true, length: 30 })
  username: string;

  @Column({ default: false })
  is_active: boolean;

  @Column({ default: false })
  is_sup: boolean;

  @Column({ default: false })
  is_admin: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Book, book => book.owner)
  books: Book[];

  @OneToMany(() => DeniedToken, deniedToken => deniedToken.tokenOwner)
  deniedTokens: DeniedToken[];
  
  @BeforeInsert()
  @BeforeUpdate()
  hashPassword(){
    this.password = bcrypt.hashSync(this.password);
  }
}

export default User;