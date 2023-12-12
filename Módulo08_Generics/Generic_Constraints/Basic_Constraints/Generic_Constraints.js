"use strict";
// if we use the console.log in this function, typescript will warn us about an error that says
// that the argument passed to the function could be a number, and because of that, you can't
// extract the .length propertie from it.
function logginIdentity(arg) {
    //console.log(arg.length)
    return arg;
}
function logginIdentity2(arg) {
    console.log(arg.length);
    return arg;
}
logginIdentity2([1, 2, 3, 4, 5]);
