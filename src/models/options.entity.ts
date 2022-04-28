import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, OneToMany, ManyToOne, } from "typeorm";
import { Questions } from "./questions.entity";

@Entity()
export class Options {
    @PrimaryGeneratedColumn()
    edId: number;

    @Column()
    name:string

    @ManyToOne(type => Questions, quiestion => quiestion.options)
    quiestion: Questions
}
