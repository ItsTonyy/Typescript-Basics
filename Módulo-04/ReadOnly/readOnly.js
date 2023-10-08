"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Exemplo 01:
class Funcionario {
    constructor(dataNascimento) {
        this.dataNascimento = dataNascimento;
    }
}
const funcionario = new Funcionario(new Date(2023, 0o7, 0o1));
// everything works
funcionario.dataNascimento = new Date(2023, 0o6, 0o2);
const funcionario_01 = {
    nomeFuncionario: 'Larry',
    salarioFuncionario: 10000
};
// everything works
funcionario_01.nomeFuncionario = 'foo';
// Cannot assign to 'nomeFuncionario' because it is a read-only property
funcionario_01.salarioFuncionario = 5000;
// Cannot assign to 'salarioFuncionario' because it is a read-only property
