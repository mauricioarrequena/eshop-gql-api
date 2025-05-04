import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";
import { Product } from "./Product";

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  stars!: number;

  @Column()
  comment!: string;

  
  @ManyToOne(() => User, (user) => user.reviews, { eager: true })
  user!: User;

  @ManyToOne(() => Product, (product) => product.reviews, { eager: true })
  product!: Product;
}