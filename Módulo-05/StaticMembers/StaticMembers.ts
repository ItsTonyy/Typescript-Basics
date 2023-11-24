// ==> Exemplo 1: Propriedades Estáticas
class Funcionario {
  static hirings: number = 0

  constructor(
    private nome:string,
    private sobrenome:string,
    private idade:number
  ) {
    Funcionario.hirings++
  }
}

const funcionario_01 = new Funcionario('Tony', 'Stark', 20)
const funcionario_02 = new Funcionario('Savana', 'Portela', 18)

console.log(Funcionario.hirings)

// ==> Exemplo 2: Métodos Estáticos

class Funcionario2 {
  private static hirings: number = 0

  constructor(
    private nome:string,
    private sobrenome:string,
    private idade:number
  ) {
    Funcionario.hirings++
  }

  public static retornarHirings() {
    return Funcionario2.hirings
  }
}

const funcionario_03 = new Funcionario2('Tyreek', 'Hill', 28)
const funcionario_04 = new Funcionario2('Tua', 'Tagovailoa', 25)

console.log(Funcionario2.retornarHirings())
