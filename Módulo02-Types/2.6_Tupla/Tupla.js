"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exemplo 1 - Uso simples de Tuplas em Typescript
let pessoa;
pessoa = ['Tony', 'Dev Junior', 20];
console.log(pessoa);
// Exemplo 2 - Acessando o valor da tupla
let person;
person = ['Tony', 'Dev Junior', 20];
console.log(person[1]);
// Exemplo 3 - Outra forma de usar Tuplas em Typescript (com labels)
let employee;
employee = ['Tony', 'Dev Junior', 20];
console.log(employee);
// Exemplo 4 - Usando Tuplas com spread operator
const listaFrutas = ['🍇', '🍉', '🍊', '🍌'];
console.log(listaFrutas);
// Exemplo 5 - Lista heterogênea de Tupla
const heterogenicList = [5, true, ...listaFrutas];
console.log(heterogenicList);
// Exemplo 6 - Uso de funções com Tupla
const listarPessoas = (pessoas, idades) => {
    return [...pessoas, ...idades];
};
let argumentos = listarPessoas(['Tony', 'Ademir'], [20, 63]);
console.log(argumentos);
function criarPessoa(...nome) {
    return [...nome];
}
let humanName = criarPessoa('Tony', 'Terra Nova', 'Portela');
console.log(humanName);
