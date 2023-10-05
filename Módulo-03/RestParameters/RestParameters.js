"use strict";
function somarNumeros(...numeros) {
    let total = 0;
    numeros.forEach((numero) => (total += numero));
    return total;
}
console.log(somarNumeros(1, 2, 3, 4, 5, 6, 7));
console.log(somarNumeros(2131, 4322, 4324, 543));
// Output: 28, 11320
