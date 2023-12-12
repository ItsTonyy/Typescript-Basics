"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Exemplo 1: Type Assertion
function PreçoFinal(value, discount, format) {
    const priceWithDiscount = value * (1 - discount);
    return format ? `R$ ${priceWithDiscount}` : priceWithDiscount;
}
const productPrice = PreçoFinal(100, 0.5, true);
console.log(productPrice);
// ==> Exemplo 2: Const Assertions
