var c = 300 // -> bad practice
console.log(c);

let a = 300
if(true) {
    let a = 30
    const b = 20
    var c = 40
    console.log("Inner 'a':",a);
}

console.log("Outer 'a':", a);
// console.log(b); -> this line gives error bcz of scope level
console.log(c);
