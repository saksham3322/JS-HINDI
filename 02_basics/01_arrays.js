// Array
const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

//Array methods

// myArr.push(6)
// myArr.push(7)
// console.log(myArr);

// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)
// console.log(myArr);

// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()
console.log(myArr);
console.log("Datatype:", typeof myArr);

console.log(newArr);
console.log("Datatype:", typeof newArr);

// slice, splice

console.log("A:", myArr);

const myNewArr1 = myArr.slice(1, 3)

console.log("slice():", myNewArr1);

console.log("B:", myArr);

const myNewArr2 = myArr.splice(1, 3)

console.log("After splice() method:");

console.log("splice():", myNewArr2);

console.log("C:", myArr);
