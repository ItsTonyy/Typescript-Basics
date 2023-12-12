// the "hellor world of generics"

function identity <T>(arg: T): T {
  return arg
}

let output = identity<string>('foo')
console.log(output)

// Generics in arrays

function returnArray<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}

returnArray([1, 2, 3, 4, 5])
returnArray(['apple', 'banana', 'strawberry'])
