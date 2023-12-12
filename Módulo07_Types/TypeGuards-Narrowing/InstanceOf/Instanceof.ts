class Bird {
  fly() {
    console.log("i'm a bird and im gonna flyyyyy!!")
  }

  layEggs() {
    console.log("i'm a bird and im gonna lay some beaaaautiful eggs")
  }
}

const pet = new Bird()

if (pet instanceof Bird) {
  pet.fly()
} else {
  console.log("i don't think this is a bird buddy...")
}

// output: i'm a bird and im gonna flyyyyy!!

