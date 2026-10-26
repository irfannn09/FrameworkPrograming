import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'books'})
export class Book {
    @PrimaryGeneratedColumn('uuid')
    id: string;


    @Column({type:'varchar',length:100})
    title: string;

    @Column({type:'varchar',length:100})
    isbn: string;


    @Column({type:'varchar',length:50})
    author: string;

    @Column({type:'int',length:0})
    publicationYear: number;

    @Column({type:'boolean',default:true})
    isAvailable: boolean;

    @CreateDateColumn({name:'updated_at'})
    updatedAt : Date;

    @DeleteDateColumn({name: 'deleted_at',default:null})
    deletedAt : Date;
}

