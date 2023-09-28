// ==> Exemplo 1: Numeric Enums
enum Idioma {
  Português = 1,
  Inglês,
  Francês,
  Italiano
}

console.log(Idioma)
// ==> Exemplo 2: String Enums

enum Dias {
  Segunda = 'SEG',
  Terça = 'TER',
  Quarta = 'Qua',
  Quinta = 'Qui'
}

console.log(Dias)

// ==> Exemplo 3: Como acessar um valor de um Enum com uma chave
const enum Comida {
  Churrasco, 
  Pizza,
  Massa,
  Feijão
}

function getComida(c: Comida) {
  return console.log('Comida Encontrada')
}

console.log(getComida(Comida.Pizza))
console.log(getComida(Comida.Feijão))
// the console.log below returns 'Comida Encontrada', showing a clear security failure in using String Enums
console.log(getComida(2))

// Output:
/* {
  '1': 'Português',
  '2': 'Inglês',
  '3': 'Francês',
  '4': 'Italiano',
  'Português': 1,
  'Inglês': 2,
  'Francês': 3,
  Italiano: 4
}
{ Segunda: 'SEG', 'Terça': 'TER', Quarta: 'Qua', Quinta: 'Qui' }
Comida Encontrada
undefined
Comida Encontrada
undefined
Comida Encontrada
undefined */