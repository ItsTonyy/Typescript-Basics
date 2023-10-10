

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
