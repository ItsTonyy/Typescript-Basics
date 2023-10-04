// ==> Exemplo 01: Optional Parameter

function informarDadosPessoais(idFuncionario: number, nomeFuncionario: string, email?: string) {
  console.log('Id do Funcionário: ', idFuncionario, ', Nome do Funcionário: ', nomeFuncionario)

  if(email !== undefined) {
    console.log(', Email do Funcionário', email)
  }
}

console.log(informarDadosPessoais(12345, 'Tony'))
console.log(informarDadosPessoais(12345, 'Tony', 'tony@gmail.com'))

// ==> Exemplo 02: 

function informarDadosPessoais02(idFuncionario: number, nomeFuncionario: string, email?: string) {
  console.log(idFuncionario, nomeFuncionario, email || '/ Faltam algumas informações. /')
}

console.log(informarDadosPessoais02(12345, 'Tony'))
console.log(informarDadosPessoais02(12345, 'Tony', 'tony@gmail.com'))

// ==> Exemplo 03:

interface Pessoa {
  idFuncionario: number,
  nomeFuncionario: string,
  idadeFuncionario?: number,
  email?: string
}

let funcionario: Pessoa

funcionario = {
  idFuncionario: 392109321,
  nomeFuncionario: 'Zezinho',
  idadeFuncionario: 35,
}