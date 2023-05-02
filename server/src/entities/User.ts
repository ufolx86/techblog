import {Field, ObjectType} from 'type-graphql'
import { Post, Updoot } from '.';
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm'

@ObjectType()
@Entity()

export class User extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number

    @Field()
    @Column()
    firstName!: string;

    @Field()
    @Column()
    lastName!: string;

    @Field()
    @Column({unique:true})
    email!: string

    @Field()
    @Column({unique:true})
    username!: string

    @Column()
    password!: string

    @Field()
    @Column( {default: 'User'})
    role!: string

    @Field()
    @Column( {type: 'text'})
    pictureUrl: string

    @Field(() => String, {nullable:true})
    @Column({ type: 'text', nullable: true})
    bio: string | null

    @OneToMany(()=>Post, (posts)=>posts.creator)
    posts: Post[]

    @OneToMany(()=>Updoot, (updoot)=>updoot.user)
    updoots: Updoot[]

    @Field(()=> String)
    @CreateDateColumn()
    createdAt: Date

    @Field(()=> String)
    @UpdateDateColumn()
    updatedAt: Date

}