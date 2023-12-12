"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ==> exemplo 01: Get
class quadradoPerfeito {
    constructor() {
        this._altura = 6;
        this._largura = 12;
    }
    get calcularQuadrado() {
        return this._altura * this._largura;
    }
}
console.log(new quadradoPerfeito().calcularQuadrado);
// ==> exemplo 02: Set
class Pessoa {
    setPessoa(nome) {
        this.nomePessoa = nome;
    }
}
const pessoa = new Pessoa();
pessoa.setPessoa('Jimmy Page');
console.log(pessoa.nomePessoa);
// ==> exemplo 03: Aprofundamento get
class Estudante {
    constructor() {
        this.nome = 'Jude';
    }
    get returnNome() {
        return this.nome;
    }
}
const estudante = new Estudante();
const nomeEstudante = estudante.returnNome;
console.log(nomeEstudante);
// ==> exemplo 04: Aprofundamento set
class Estudante_01 {
    constructor(estudanteNome, estudanteSemestre, estudanteCurso) {
        this.nome = estudanteNome;
        this.semestre = estudanteSemestre;
        this.curso = estudanteCurso;
    }
    get Curso() {
        return this.curso;
    }
    set changeCurso(setCurso) {
        this.curso = setCurso;
    }
}
const estudante_01 = new Estudante_01('Lebron', 2, 'Ciência da Computação');
console.log(estudante_01.curso);
// getter call
console.log('Curso do Estudante:', estudante_01.curso);
// setter call
estudante_01.curso = 'Análise e Desenvolvimento de Sistemas';
