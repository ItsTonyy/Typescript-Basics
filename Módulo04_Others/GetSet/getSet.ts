export {}

// ==> exemplo 01: Get
class quadradoPerfeito {
  private _altura = 6
  private _largura = 12

  get calcularQuadrado() {
    return this._altura * this._largura
  }
}

console.log(new quadradoPerfeito().calcularQuadrado)


// ==> exemplo 02: Set
class Pessoa {
  nomePessoa: string

  setPessoa(nome:string) {
    this.nomePessoa = nome
  }
}

const pessoa = new Pessoa()
pessoa.setPessoa('Jimmy Page')
console.log(pessoa.nomePessoa)


// ==> exemplo 03: Aprofundamento get

class Estudante {
  nome: string = 'Jude'
  semestre: number
  curso: string

  public get returnNome() {
    return this.nome
  }
}

const estudante = new Estudante()
const nomeEstudante = estudante.returnNome
console.log(nomeEstudante)

// ==> exemplo 04: Aprofundamento set

class Estudante_01 {
  nome: string
  semestre: number
  curso: string

  constructor(estudanteNome: string, estudanteSemestre: number, estudanteCurso: string) {
    this.nome = estudanteNome
    this.semestre = estudanteSemestre
    this.curso = estudanteCurso
  }

  public get Curso() {
    return this.curso
  }

  public set changeCurso(setCurso: string) {
    this.curso = setCurso
  }
}

const estudante_01 = new Estudante_01('Lebron', 2, 'Ciência da Computação')
console.log(estudante_01.curso)

// getter call
console.log('Curso do Estudante:', estudante_01.curso)

// setter call
estudante_01.curso = 'Análise e Desenvolvimento de Sistemas' 