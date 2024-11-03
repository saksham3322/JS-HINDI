// Stack -> Primitive
// Heap -> Non-Primitive

let name = "saksham"

let anotherName = name
anotherName = "sharad"

// console.log(name);
// console.log(anotherName); // why the change is not done?? COPY IS MADE CHANGES ARE DONE IN THAT NOT IN THE ORIGINAL VARIABLE.

//Heap

let userOne = {
    id: 3456,
    name: "abc"
}

let userTwo = userOne

userTwo.id = 9999

console.log(userOne);
console.log(userTwo);

console.log("Note both are changed.");

console.log(userOne.id);
console.log(userTwo.id);
