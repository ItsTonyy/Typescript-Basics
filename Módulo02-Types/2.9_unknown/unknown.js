"use strict";
// ==> Exemplo 01: Tipo Unknown
let valorVariavel = 'teste';
valorVariavel = true;
valorVariavel = 12;
valorVariavel = [];
valorVariavel = 'foo';
console.log(valorVariavel);
// ==> Exemplo 02: Erro ao tentar atribuir um valor do tipo 'unknown' a outros tipos
let valor;
let valor1 = valor;
let valor2 = valor;
let valor3 = valor;
// ERROR: Type unknown is not assignable to type 'boolean'/'string'/'number'.
// ==> Exemplo 03: diferença entre: 'any' vs 'unknown' 
let valorAny;
let valorUnknown;
console.log(valorAny.toFixed('foobar'));
console.log(valorUnknown.toFixed(notWorking));
