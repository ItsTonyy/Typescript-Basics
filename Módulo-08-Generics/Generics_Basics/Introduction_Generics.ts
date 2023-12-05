function identity <T>(arg: T): T {
  return arg
}

let output = identity<string>('foo')
console.log(output)

const randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filteredArray = randomArray.filter(x => x < 5)