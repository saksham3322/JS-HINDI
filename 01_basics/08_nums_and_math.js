// ++++++++++++++ Number +++++++++++++++++++
const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3));

const hundred = 1000000
// console.log(hundred.toLocaleString('en-IN'));

// +++++++++++++ Maths ++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(3.1));
console.log(Math.floor(6.9));

console.log(Math.min(3, 1, 4, 2));
console.log(Math.max(4, 1, 5, 9));

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 5
const max = 10

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
