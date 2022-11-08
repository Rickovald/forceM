import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Discography {
    @PrimaryGeneratedColumn()
    id: number;
    @Column( {nullable: false, length: 64} )
    name: string;
    @Column()
    year: string;
    @Column()
    href: string;
    @Column()
    image: string;
    @Column()
    desc: string;
}