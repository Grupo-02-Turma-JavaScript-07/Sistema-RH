import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Funcionario } from './entities/funcionarios.entity';
// import { FuncionarioController } from './controllers/funcionario.controller';
// import { FuncionarioService } from './services/funcionario.service';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [],
  controllers: [],
  exports: [TypeOrmModule],
})
export class FuncionarioModule {}
