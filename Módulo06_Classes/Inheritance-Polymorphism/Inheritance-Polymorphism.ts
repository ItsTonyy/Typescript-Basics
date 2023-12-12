// ==> Inheritance
class NormalPerson {
  firstName: string
  secondName: string

  greet(): void {
    console.log('Hi everyone!')
  }
}

class AverageProgrammer extends NormalPerson {
  greet(): void {
    console.log('')
  }
}

const person = new AverageProgrammer
person.greet()
// Output: Hello world!

// ==> Polymorphism

class animal {
  public name: string

  constructor(name:string) {
    this.name = name
  }

  public makeSound(): void {
    console.log(process.stdout.write('generic animal sound\n'))
  }
}

export class Dog extends animal {
  public makeSound(): void {
    process.stdout.write('Banze says: Wuff Wuff\n')
  }
}

export class Cat extends animal {
  public makeSound(): void {
    process.stdout.write('Luke says: Meow Meow')
  }
}

//const luke: Cat = new Cat('Luke')
//luke.makeSound()

const banze: Dog = new Dog('Banze')
banze.makeSound()