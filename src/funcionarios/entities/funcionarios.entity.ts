import { IsNotEmpty } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'tb_funcionarios' })
export class Funcionario {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 8, scale: 2, nullable: false })
  salario: number;

  @IsNotEmpty()
  @Column({ length: 20, nullable: false })
  cargo: string;

  @IsNotEmpty()
  @CreateDateColumn({ type: 'timestamp', nullable: false })
  data_admissao: Date;
}
