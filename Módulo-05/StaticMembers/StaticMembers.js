"use strict";
// ==> Exemplo 1: Propriedades Estáticas
class Funcionario {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        Funcionario.hirings++;
    }
}
Funcionario.hirings = 0;
const funcionario_01 = new Funcionario('Tony', 'Stark', 20);
const funcionario_02 = new Funcionario('Savana', 'Portela', 18);
console.log(Funcionario.hirings);
// ==> Exemplo 2: Métodos Estáticos
class Funcionario2 {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        Funcionario.hirings++;
    }
    static retornarHirings() {
        return Funcionario2.hirings;
    }
}
Funcionario2.hirings = 0;
const funcionario_03 = new Funcionario2('Tyreek', 'Hill', 28);
const funcionario_04 = new Funcionario2('Tua', 'Tagovailoa', 25);
console.log(Funcionario2.retornarHirings());
