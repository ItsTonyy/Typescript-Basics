"use strict";
// ==> Exemplo 01: Functions (Named Functions)
function sum(x, y) {
    return (x + y);
}
console.log(sum(321430, 439232));
// output: 760662
// ==> Exemplo 02: Função Anônima com arrow function
const saudar = (mensagem) => {
    return mensagem;
};
console.log(saudar('Olá developers!'));
// ==> Exemplo 04: Function constructor 
const saudar02 = new Function('mensagem', 'return "Fato: " + mensagem');
console.log(saudar02('function constructor é horrível'));
