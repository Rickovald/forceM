import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Admins {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false, length: 64 })
  name: string;
  @Column()
  password: string;
  @Column()
  refreshToken: string;
  @Column()
  accessToken: string;
}
