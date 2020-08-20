import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  CreateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';

import User from './User';

@Entity('denied_tokens')
class DeniedToken {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  token: string;

  @Column({ default: 'refresh' })
  reason: string;

  @CreateDateColumn()
  invalidated_at: Date;

  @ManyToOne(() => User, tokenOwner => tokenOwner.deniedTokens, { 
    eager: true, 
    nullable: false 
  })
  @JoinColumn({ name: "token_owner" })
  tokenOwner: User;

}

export default DeniedToken;