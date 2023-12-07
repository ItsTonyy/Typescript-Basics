function getPropertie(obj, key) {
    console.log(obj[key]);
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
getPropertie(x, 'a');
getPropertie(x, 'c');
// Argument of type '"e"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'
//getPropertie(x, 'e')
