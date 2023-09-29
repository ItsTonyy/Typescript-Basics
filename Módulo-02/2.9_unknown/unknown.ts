// ==> Exemplo 01: Tipo Unknown
let valorVariavel: unknown = 'teste'

valorVariavel = true
valorVariavel = 12
valorVariavel = []
valorVariavel = 'foo'

console.log(valorVariavel)


// ==> Exemplo 02: Erro ao tentar atribuir um valor do tipo 'unknown' a outros tipos

let valor: unknown;

let valor1: boolean = valor
let valor2: string = valor
let valor3: number = valor

// ERROR: Type unknown is not assignable to type 'boolean'/'string'/'number'.

// ==> Exemplo 03: diferença entre: 'any' vs 'unknown' 

let valorAny: any;
let valorUnknown: unknown;

console.log(valorAny.toFixed('foobar'))
console.log(valorUnknown.toFixed(notWorking))