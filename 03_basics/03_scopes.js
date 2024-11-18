var c = 300 // -> bad practice
// console.log(c);

let a = 300
if(true) {
    let a = 30
    const b = 20
    var c = 40
    // console.log("Inner 'a':",a);
}

// console.log("Outer 'a':", a);
// console.log(b); -> this line gives error bcz of scope level
// console.log(c);

function one() {
    const username = "saksham"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // -> this gives error
    two()
}

// one()

if(true) {
    const username = "saksham"
    if(username === "saksham") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); // -> this gives error
}

// console.log(username); // -> this gives error

// +++++++++++++++++ Interesting +++++++++++++++++
// ++++++++++++ Hoisting Basics ++++++++++++++++++

console.log(addOne(5));

function addOne(num) {
    return num + 1
}

// addTwo(4) // -> this gives error bcz used before initialization

const addTwo = function(num) {
    return num + 2
}

console.log(addTwo(8));
