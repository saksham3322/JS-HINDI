// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

let name = "saksham"
const scoreValue = 100.3
const loggedIn = false
const outsideTemp = null
let userMail

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId)

const bigNumber = 1223424988298890103n

// console.log(typeof name);
// console.log(typeof scoreValue);
// console.log(typeof loggedIn);
// console.log(typeof outsideTemp);
// console.log(typeof userMail);
// console.log(typeof id);
// console.log(typeof bigNumber);
console.log();

// Reference (Non - Primitive) :-
// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"]
let myobj = {
    name : "saksham",
    age : 18,
}

const myFunction = function() {
    console.log("Hello Guys");
}

console.log(heroes);

console.log(myobj.name);
console.log(myobj.age);
myFunction()
