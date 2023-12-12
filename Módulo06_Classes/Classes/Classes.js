"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Exemplo 01: Classe
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}
const pessoa = new Pessoa('Tony', 'Terra Nova');
console.log(pessoa.nomeCompleto());
// Output: Tony Terra Nova
// ==> Exemplo 02: Classe sem constructor
class Estudante {
}
// criar variável ou objeto
const estudante = new Estudante;
// incializar a classe
estudante.codigoEstudante = 32132;
estudante.nomeEstudante = 'Cousin';
console.log('Código do estudante: ' + estudante.codigoEstudante);
console.log('Nome do estudante: ' + estudante.nomeEstudante);
// ==> Exemplo 03: Classe com constructor
class Estudante01 {
    constructor(codigoEstudante, nomeEstudante) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }
    logEstudante() {
        console.log('nome do Estudante: ' + this.nomeEstudante);
        console.log('código do estudante: ' + this.codigoEstudante);
    }
}
// ciar variável ou objeto
const estudanteVar = new Estudante01(321321, 'Zezinho');
console.log(estudanteVar.logEstudante());
