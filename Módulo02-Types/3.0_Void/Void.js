"use strict";
// ==> Exemplo 01: Funções
function logMessage(message) {
    console.log(message);
}
logMessage('foo');
logMessage('bar');
// Output: foo bar 
// Typescript is automatically infering type void into the function because there is no data return
// ==> Exemplo 02: Arrow Function
const logMessageDuplicate = (message) => {
    console.log(message);
};
logMessageDuplicate('blue');
logMessageDuplicate('red');
