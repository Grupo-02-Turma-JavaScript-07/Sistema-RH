import { Funcionario } from '../entities/funcionarios.entity';
import { FuncionarioService } from './../services/funcionario.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';

@Controller('/funcionarios')
export class FuncionarioController {
  constructor(private readonly funcionarioService: FuncionarioService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Funcionario[]> {
    return this.funcionarioService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Funcionario> {
    return this.funcionarioService.findById(id);
  }

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  findByName(@Param('nome') nome: string): Promise<Funcionario[]> {
    return this.funcionarioService.findByName(nome);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() funcionario: Funcionario): Promise<Funcionario> {
    return this.funcionarioService.create(funcionario);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() funcionario: Funcionario): Promise<Funcionario> {
    return this.funcionarioService.update(funcionario);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.funcionarioService.delete(id);
  }
}
