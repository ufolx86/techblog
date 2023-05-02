import { Field, Int, ObjectType } from "type-graphql"
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import { Category, Updoot, User } from '.'

@ObjectType()
@Entity()
export class Post extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number
    
    @Field()
    @Column()
    title!:string

    @Field()
    @Column()
    extract!:string

    @Field()
    @Column()
    featuredImage!: string

    @ManyToMany(() => Category)
    @JoinTable()
    categories: Category[]

    @Field()
    @Column()
    content!: string

    @Field()
    @Column({type:"int", default: 0})
    points!:number

    @Field(()=> Int, {nullable: true})
    voteStatus: number | null // 1 if voted or - or null

    @Field()
    @Column()
    creatorId: number

    @Field(() => User)
    @ManyToOne(()=> User,(user)=>user.posts)
    creator: User

    // User => posts
    @OneToMany(()=> Updoot, (updoot)=>updoot.post)
    updoots: Updoot[]

    @Field(()=> String)
    @CreateDateColumn()
    createdAt: Date

    @Field(()=> String)
    @UpdateDateColumn()
    updatedAt: Date
}