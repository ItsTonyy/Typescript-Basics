"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionary {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get returnFullname() {
        return `${this.name} ${this.surname}`;
    }
    issuePaycheck() {
        return `Name: ${this.name}, Salary: ${this.returnSalary()}`;
    }
}
// you can't create an instance of an abstract class, for that we have to use the
// abstract class in a subclass and then create an instance
//const funcionario1 = new Funcionary
class CLTFuncionary extends Funcionary {
    constructor(name, surname, salary) {
        super(name, surname);
        this.salary = salary;
    }
    returnSalary() {
        return this.salary;
    }
}
const funcionary1 = new CLTFuncionary('Shohei', 'ohtani', 700000000);
console.log(funcionary1.returnSalary());
