"use strict";
// ==> Without using Const Assertion, we got this type of problem:
const routes = {
    home: '/',
    admin: '/admin',
    users: '/users'
};
// routes is mutable
routes.admin = '/whatever';
const goToRoute = (route) => { };
// as you can see, we got an error because all the properties of the routes object are automatically classified as strings
// ⬇️ Error: Argument of type 'string' is not assignable to parameter of type '"/" | "/admin" | "/users"'
//goToRoute(routes.home)
// ==> By using "as const" we make the routes object more direct and specific
const routes2 = {
    home: '/',
    admin: '/admin',
    users: '/users'
};
// we can now access properties of the routes object in a function that uses it as a parameter
const goToRoute2 = (route) => { };
goToRoute2(routes2.home);
