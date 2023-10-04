"use strict";
// ==> Exemplo 01: Optional Parameter
function informarDadosPessoais(idFuncionario, nomeFuncionario, email) {
    console.log('Id do Funcionário: ', idFuncionario, ', Nome do Funcionário: ', nomeFuncionario);
    if (email !== undefined) {
        console.log(', Email do Funcionário', email);
    }
}
console.log(informarDadosPessoais(12345, 'Tony'));
console.log(informarDadosPessoais(12345, 'Tony', 'tony@gmail.com'));
// ==> Exemplo 02: 
function informarDadosPessoais02(idFuncionario, nomeFuncionario, email) {
    console.log(idFuncionario, nomeFuncionario, email || '/ Faltam algumas informações. /');
}
console.log(informarDadosPessoais02(12345, 'Tony'));
console.log(informarDadosPessoais02(12345, 'Tony', 'tony@gmail.com'));
let funcionario;
funcionario = {
    idFuncionario: 392109321,
    nomeFuncionario: 'Zezinho',
    idadeFuncionario: 35,
};
