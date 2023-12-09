// abstract classes serves a purpose of being a base class for subclasses.
export {}

abstract class Funcionary {
  constructor(private name: string, private surname: string) {}

  // every abstract class needs to have at least one abstract method
  abstract returnSalary(): number
  get returnFullname(): string {
    return `${this.name} ${this.surname}`
  }

  issuePaycheck(): string {
    return `Name: ${this.name}, Salary: ${this.returnSalary()}`
  }

}

// you can't create an instance of an abstract class, for that we have to use the
// abstract class in a subclass and then create an instance

//const funcionario1 = new Funcionary

class CLTFuncionary extends Funcionary {
  constructor(name: string, surname: string, private salary: number) {
    super(name, surname)
  }

  returnSalary(): number {
    return this.salary
  }
}

const funcionary1 = new CLTFuncionary('Shohei', 'ohtani', 700000000)
console.log(funcionary1.returnSalary())