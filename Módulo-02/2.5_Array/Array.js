"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exemplo 1 => Uso de Colchetes
const arrayFrutas = ['🍇', '🍎', '🍉', '🍌'];
console.log(arrayFrutas);
// Exemplo 2 => Array Object
const arrayPaises = ['França, Inglaterra, Alemanha'];
console.log(arrayPaises);
// Exemplo 3 => Adicionando mais strings com o método 'push'
const arrayPaises2 = ['França, Inglaterra, Alemanha'];
let pushPaises = arrayPaises2.push('Italia');
console.log(pushPaises);
// Exemplo 4 => Identificar tamanho do array - método length
const arrayPaises3 = ['França, Inglaterra, Alemanha'];
console.log(arrayPaises3.length);
// Exemplo 5 => Exemplo de array com Spread Operator
const numbers = [1, 2, 3, 4, 5];
const moreNumbers = [...numbers, 6, 7, 8, 9, 10];
console.log(moreNumbers);
// Exemplo 6 => Exemplo de array com laço de iteração 
let languages = ['java', 'javaScript', 'c++'];
function loopLanguages(languages) {
    for (let i = 0; i < languages.length; i++) {
        const element = languages[i];
        console.log(element);
    }
}
loopLanguages(languages);
