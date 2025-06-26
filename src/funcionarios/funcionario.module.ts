import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Funcionario } from './entities/funcionarios.entity';
import { FuncionarioService } from './services/funcionario.service';
import { FuncionarioController } from './controllers/funcionario.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Funcionario])],
  providers: [FuncionarioService],
  controllers: [FuncionarioController],
  exports: [TypeOrmModule],
})
export class FuncionarioModule {}
