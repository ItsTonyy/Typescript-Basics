export {}

// ==> Exemplo 01 - Modificador: public
class estudante {
  codigoEstudante: number 
  nomeEstudante: string 
}

const estudante_01 = new estudante

estudante_01.codigoEstudante = 201
estudante_01.nomeEstudante = 'larry'

console.log(estudante_01.codigoEstudante)
console.log(estudante_01.nomeEstudante)

// ==> Exemplo 02 - Modificador: private

class Estudante_02 {
  nomeEstudante: string
  codigoEstudante: number
  private idadeEstudante: number

  constructor(nomeEstudante: string, codigoEstudante: number, idadeEstudante: number) {
    this.nomeEstudante = nomeEstudante
    this.codigoEstudante = codigoEstudante 
    this.idadeEstudante = idadeEstudante 
  }

  getEstudante() {
    return `Nome do Estudante: ${this.nomeEstudante}, Código do Estudante: ${this.codigoEstudante},
    idade do estudante: ${this.idadeEstudante}.`
  }
}

const estudante_02 = new Estudante_02('Tony', 2077, 20)
console.log(estudante_02.getEstudante())

  // => console.log(estudante_02.idadeEstudante)
  // => Error: Property 'idadeEstudante' is private and only accessible within class 'Estudante_02'.

// ==> Exemplo 03 - Modificador: protected

class Estudante_03 {
  codigoEstudante: number 
  protected nomeEstudante: string 

  constructor(codigoEstudante: number, nomeEstudante: string) {
    this.codigoEstudante = codigoEstudante
    this.nomeEstudante = nomeEstudante
  }
}

class Pessoa extends Estudante_03 {
  private curso: string

  constructor(codigoEstudante: number, nomeEstudante: string, curso: string) {
    super(codigoEstudante, nomeEstudante);
    this.curso = curso
  }

  retonarDadosAluno() {
    return `Nome do Estudante: ${this.nomeEstudante}, Código do Estudante: ${this.codigoEstudante},
    Matéria do Estudante: ${this.curso}.`
  }
}

const pessoa = new Pessoa(2077, 'Joe', 'Matemática')
console.log(pessoa.retonarDadosAluno())

  // => Error: Property 'nomeEstudante' is protected and only accessible within class 'Estudante_03' and its subclasses.
  // => Error: Property 'curso' is private and only accessible within class 'Pessoa'.

// ==> Exemplo 04 - Modificador: readonly


