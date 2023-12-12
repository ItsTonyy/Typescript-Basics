export {}

class Animal {
  moveAnimal(distance: number) {
    return `the animal moved ${distance} meters.`
  }
}

class Dog extends Animal {
  latir(): string {
    return 'au au'
  }
}

const dog_01 = new Dog
console.log(dog_01.moveAnimal(10))
console.log(dog_01.latir())

class Pessoa {
  constructor(private nome: string, private sobrenome: string) {
    this.nome = nome
    this.sobrenome = sobrenome
  }

  returnFullname() {
    return `my full name is: ${this.nome} ${this.sobrenome}`
  }

  introducePerson() {
    return `Hi, i'm ${this.nome}, nice to meet you!`
  }
}

class Funcionario extends Pessoa {
  constructor(nome: string, sobrenome: string, private funcao: string) {
    super(nome, sobrenome)
    this.funcao = funcao
  }
}

const funcionario = new Funcionario('Tony', 'Soprano', 'Software engineer')
console.log(funcionario.introducePerson())
console.log(funcionario.returnFullname())

// final output: 
/* the animal moved 10 meters.
au au
Hi, i'm Tony, nice to meet you!
my full name is: Tony Soprano */