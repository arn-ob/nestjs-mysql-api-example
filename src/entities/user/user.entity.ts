import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity('user')
export default class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: "varchar", default: "" })
    email: string
       
    @Column({ type: "varchar", default: "" })
    name: string

    @Column({ type: "varchar", default: "" })
    phone_no: string

    @Column({ type: "varchar", default: "" })
    password: string

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;
}