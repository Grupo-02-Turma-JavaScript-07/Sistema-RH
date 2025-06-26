import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([Funcionario])],
    providers: [FuncionarioService],
    controllers: [FuncionarioController],
    exports: [TypeOrmModule]
})
export class FuncionarioModule { }