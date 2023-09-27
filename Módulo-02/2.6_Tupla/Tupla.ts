// Exemplo 1 - Uso simples de Tuplas em Typescript
let pessoa: [string, string, number]
pessoa = ['Tony', 'Dev Junior', 20]
console.log(pessoa)

// Exemplo 2 - Acessando o valor da tupla
let person: [string, string, number]
person = ['Tony', 'Dev Junior', 20]
console.log(person[1])

// Exemplo 3 - Outra forma de usar Tuplas em Typescript (com labels)
let employee: [name:string, job:string, age:number]
employee = ['Tony', 'Dev Junior', 20]
console.log(employee)


// Exemplo 4 - Usando Tuplas com spread operator
const listaFrutas: [string, ...string[]] = ['🍇','🍉','🍊','🍌']
console.log(listaFrutas)

// Exemplo 5 - Lista heterogênea de Tupla
const heterogenicList: [number, boolean, ...string[]] = [5, true, ...listaFrutas]
console.log(heterogenicList)

// Exemplo 6 - Uso de funções com Tupla
const listarPessoas = (pessoas: string[], idades:number[]) => {
  return [...pessoas, ...idades]
}

let argumentos = listarPessoas(['Tony', 'Ademir'], [20, 63])
console.log(argumentos)

// Exemplo 7 - Labeled Tuples com Spread Operator numa função

type Nome = 
  | [primeiroNome: string, sobrenome: string] 
  | [primeiroNome: string, sobrenome: string, ultimoNome: string]

function criarPessoa(...nome: Nome) {
  return [...nome]
}

let humanName = criarPessoa('Tony', 'Terra Nova', 'Portela')
console.log(humanName)

export {}