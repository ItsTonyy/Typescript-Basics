"use strict";
// ==> Exemplo 01: Exemplo básico do uso do Type Object
const pessoa = {
    Nome: 'Tony',
    Idade: 20,
    Role: 'Software Engineer'
};
console.log(pessoa);
// ==> Exemplo 02: Object como parâmetros de função
function onboarding01(funcionario) {
    return 'seja bem-vindo' + ' ' + funcionario.nome;
}
console.log(onboarding01({ nome: 'Tony' }));
function onboarding02(pessoa) {
    return 'Meu nome é ' + pessoa.nome + ' e eu tenho ' + pessoa.idade + ' anos.';
}
console.log(onboarding02({
    nome: 'Tony',
    idade: 20
}));
function onboarding03(pessoa) {
    return 'Meu nome é ' + pessoa.nome + ' e eu tenho ' + pessoa.idade + ' anos.' +
        ' Minha stack principal é ' + pessoa.linguagem + '.';
}
console.log(onboarding03({
    nome: 'Tony',
    idade: 20,
    linguagem: 'Typecript'
}));
function onboarding06(pessoa) {
    return 'Meu nome é ' + pessoa.nome + ' e eu tenho ' + pessoa.idade + ' anos.' +
        ' Minha stack principal é ' + pessoa.linguagem + ' e meu email é ' + pessoa.email + '.';
}
console.log(onboarding06({
    nome: 'Martinelli',
    idade: 30, linguagem: 'Typescript',
    email: 'tony@gmail.com'
}));
const filha = {
    nome: 'Alice',
    sobrenome: 'Martinelli',
    idade: 18
};
console.log(filha);
const usuario = {
    nome: 'Tony',
    email: 'tony@gmail.com'
};
const admin = {
    nome: 'TonyThatIsAdmin',
    email: 'adminTony@gmail.com',
    admin: true
};
function acessarSistema(usuario) {
    return usuario;
}
console.log(acessarSistema(usuario));
console.log(acessarSistema(admin));
