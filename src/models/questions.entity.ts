import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Options } from './options.entity';

@Entity()
export class Questions {
    @PrimaryGeneratedColumn()
    edId: number;

    @Column()
    name: string | null;
    
    @OneToMany(type => Options, option => option.quiestion,{ cascade: ['insert', 'update'] })
    options: Options[]
}
