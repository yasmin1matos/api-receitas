import {Column, Entity, PrimaryGeneratedColumn} from "typeorm"
import { v4 as uuid } from "uuid"

@Entity('receitas')
export class Receitas {
  
    @PrimaryGeneratedColumn()
    id: string

    @Column({type: 'text'})
    name:string

}