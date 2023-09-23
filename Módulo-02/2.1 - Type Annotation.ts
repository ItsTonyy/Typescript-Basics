// => variáveis [type annotations] 
const name: string = 'Name: Tony'
console.log(name)

// => arrays [type annotations] 
const animals: string[] = ['girafa', 'gato', 'cachorro', 'panda']
const luckyNumbers: number[] = [2, 7, 10, 13, 23] 

console.log(animals, luckyNumbers)
// => objetos [type annotations] 
let carro: {
  modelo: string,
  ano: number,
  preco: number
}

carro = {modelo: 'Ford Focus', ano: 2020, preco: 60000}
console.log(carro)
// => functions [type annotations] 



export {}