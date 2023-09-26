// Exemplo 1 => Uso de Colchetes
const arrayFrutas: string[] = ['🍇','🍎','🍉','🍌']
console.log(arrayFrutas)

// Exemplo 2 => Array Object
const arrayPaises: Array<string> = ['França, Inglaterra, Alemanha']
console.log(arrayPaises)

// Exemplo 3 => Adicionando mais strings com o método 'push'
const arrayPaises2: Array<string> = ['França, Inglaterra, Alemanha']
let pushPaises = arrayPaises2.push('Italia')
console.log(pushPaises)

// Exemplo 4 => Identificar tamanho do array - método length
const arrayPaises3: Array<string> = ['França, Inglaterra, Alemanha']
console.log(arrayPaises3.length)

// Exemplo 5 => Exemplo de array com Spread Operator
const numbers: Array<number> = [1, 2, 3, 4, 5]
const moreNumbers = [...numbers, 6, 7, 8, 9, 10]
console.log(moreNumbers)

// Exemplo 6 => Exemplo de array com laço de iteração 

let languages: Array<string> = ['java', 'javaScript', 'c++']

function loopLanguages(languages: Array<string>) {
  for (let i = 0; i < languages.length; i++) {
    const element = languages[i];
    console.log(element)
  }
}

loopLanguages(languages)

// output: 
/* [ '🍇', '🍎', '🍉', '🍌' ]
[ 'França, Inglaterra, Alemanha' ]
2
1
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
java
javaScript
c++ */


export{}