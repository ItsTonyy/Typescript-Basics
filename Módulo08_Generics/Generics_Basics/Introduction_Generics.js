"use strict";
// the "hellor world of generics"
function identity(arg) {
    return arg;
}
let output = identity('foo');
console.log(output);
// Generics in arrays
function returnArray(arg) {
    console.log(arg.length);
    return arg;
}
returnArray([1, 2, 3, 4, 5]);
returnArray(['apple', 'banana', 'strawberry']);
