"use strict";
// ==> Exemplo 1: Tipo Any
const randomNumber = 2077;
const beautifulName = 'Tony';
const NumberAndName = randomNumber + beautifulName;
console.log(NumberAndName);
// Output: 2077Tony
// ==> Exemplo 2:Quando o tipo Any é inserido implicitamente
let variable;
// its type is Any by default
// ==> Exemplo 3: quando devemos usar o tipo Any?
const form = {
    nome: 'Tony',
    Age: 20,
    Role: 'Software Engineer'
};
console.log(form);
