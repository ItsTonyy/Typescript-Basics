
// ==> Exemplo 01: Exemplo básico do uso do Type Object
const pessoa = {
  Nome: 'Tony',
  Idade: 20,
  Role: 'Software Engineer'  
}

console.log(pessoa)
// ==> Exemplo 02: Object como parâmetros de função
function onboarding01 (funcionario: {nome: string}) {
  return 'seja bem-vindo' + ' ' + funcionario.nome
}

console.log(onboarding01({ nome: 'Tony' }))

// ==> Exemplo 03: Object com Interface
interface Pessoa {
  nome: string,
  idade: number
}

function onboarding02 (pessoa: Pessoa) {
  return 'Meu nome é ' +  pessoa.nome + ' e eu tenho ' + pessoa.idade + ' anos.' 
}

console.log(onboarding02({
  nome: 'Tony',
  idade: 20
}))
// ==> Exemplo 04: Object como Type alias
type Pessoa04 = {
  nome: string,
  idade: number,
  linguagem: string
}

function onboarding03 (pessoa: Pessoa04) {
  return 'Meu nome é ' +  pessoa.nome + ' e eu tenho ' + pessoa.idade + ' anos.' +
   ' Minha stack principal é ' + pessoa.linguagem + '.'
}

console.log(onboarding03({
  nome: 'Tony',
  idade: 20,
  linguagem: 'Typecript'
}))

// ==> Exemplo 05: Usando optional no object
interface Pessoa05 {
  nome: string,
  idade: number,
  linguagem: string
  maritalStatus?: 'string' // Optional in an object
}


// ==> Exemplo 06: Propriedade 'readonly'
interface Pessoa06 {
  nome: string,
  idade: number,
  linguagem: string
  readonly email: string // read only propetie
}

function onboarding06 (pessoa: Pessoa06) {
  return 'Meu nome é ' +  pessoa.nome + ' e eu tenho ' + pessoa.idade + ' anos.' +
   ' Minha stack principal é ' + pessoa.linguagem + ' e meu email é ' + pessoa.email + '.'
}

console.log(onboarding06({
  nome: 'Martinelli',
  idade: 30, linguagem: 'Typescript',
  email:'tony@gmail.com'
  }))
// ==> Exemplo 07: Tipos de extensões (heranças)

interface Pai {
  nome: string
}

interface Mae {
  sobrenome: string
}

interface Filho extends Pai, Mae {
  idade: number
}

const filha: Filho = {
  nome: 'Alice',
  sobrenome: 'Martinelli',
  idade: 18
}

console.log(filha)

// ==> Exemplo 08: Tipos de interseções
interface Cachorro {
  nome: string
}

interface Gato {
  nome: string
}

type animal  = Cachorro & Gato

// ==> Exemplo 09: Generic Objects

type Usuario = {
  nome: string,
  email: string
}

type Admin = {
  nome: string,
  email: string,
  admin: true
}

const usuario:Usuario = {
  nome: 'Tony',
  email: 'tony@gmail.com'
}

 const admin:Admin = {
  nome: 'TonyThatIsAdmin',
  email: 'adminTony@gmail.com',
  admin: true
} 

function acessarSistema<T>(usuario: T): T {
  return usuario
}

console.log(acessarSistema<Usuario>(usuario))
console.log(acessarSistema<Admin>(admin))

