// ==> Exemplo 01: Satisfies Operator
var pessoa1 = {
    birthLocation: 'Rio de Janeiro',
    currentResidence: { x: 1, y: 1 }
};
// Error: Property 'toUpperCase' does not exist on type 'localization'.
console.log(pessoa1.birthLocation.toUpperCase());
