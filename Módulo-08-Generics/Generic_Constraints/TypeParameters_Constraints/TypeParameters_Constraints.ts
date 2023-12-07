function getPropertie<T, K extends keyof T>(obj: T, key:K) {
  console.log(obj[key])
  return obj[key]
}

const x = {a: 1, b: 2, c: 3, d: 4}

getPropertie(x, 'a')
getPropertie(x, 'c')

// Argument of type '"e"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'
//getPropertie(x, 'e')