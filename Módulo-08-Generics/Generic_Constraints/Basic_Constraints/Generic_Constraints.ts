
// if we use the console.log in this function, typescript will warn us about an error that says
// that the argument passed to the function could be a number, and because of that, you can't
// extract the .length propertie from it.
function logginIdentity<T>(arg: T): T {
  //console.log(arg.length)
  return arg
} 

// by creating this interface and applying to our identity function, we are constraining that
// our function will only consider types that have the ".length" propertie.
interface LengthWise {
  length: number
}

function logginIdentity2<T extends LengthWise>(arg: T): T {
  console.log(arg.length)
  return arg
}

logginIdentity2([1, 2, 3, 4, 5])