import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, OneToMany, ManyToOne, } from "typeorm";
import { Questions } from "./questions.entity";

@Entity()
export class Options {
    @PrimaryGeneratedColumn()
    edId: number;

    @Column()
    title:string

    @Column()
    redirect:number

    @Column()
    rate:number

    @ManyToOne(type => Questions, quiestion => quiestion.options)
    quiestion: Questions
}
