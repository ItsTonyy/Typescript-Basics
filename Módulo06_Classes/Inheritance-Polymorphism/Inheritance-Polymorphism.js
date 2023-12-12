"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = exports.Dog = void 0;
// ==> Inheritance
class NormalPerson {
    greet() {
        console.log('Hi everyone!');
    }
}
class AverageProgrammer extends NormalPerson {
    greet() {
        console.log('');
    }
}
const person = new AverageProgrammer;
person.greet();
// Output: Hello world!
// ==> Polymorphism
class animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(process.stdout.write('generic animal sound\n'));
    }
}
class Dog extends animal {
    makeSound() {
        process.stdout.write('Banze says: Wuff Wuff\n');
    }
}
exports.Dog = Dog;
class Cat extends animal {
    makeSound() {
        process.stdout.write('Luke says: Meow Meow');
    }
}
exports.Cat = Cat;
//const luke: Cat = new Cat('Luke')
//luke.makeSound()
const banze = new Dog('Banze');
banze.makeSound();
