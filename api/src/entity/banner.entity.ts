import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Banners {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  img: string;
  @Column()
  head: string;
  @Column()
  button: string;
  @Column()
  href: string;
  @Column()
  href_type: string;
}
