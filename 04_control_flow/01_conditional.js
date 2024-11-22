//if
// const isUserLoggedIn = true
// const temperature = 41

// if(temperature === 41) {
//     console.log("less than 50")
// } else {
//     console.log("greater than 50");
// }

// console.log("execute");

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if(score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); // this gives error bcz of scope

const balance = 1000

if(balance < 500) {
    console.log("less than 500");
} else if(balance < 750) {
    console.log("less than 750");
} else if(balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}

const isUserLoggedIn = true
const debitCard = true

if(isUserLoggedIn && debitCard) {
    console.log("Allow to buy courses");
}

const loggedInFromGoogle = false
const loggedInFromEmail = true

if(loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");
}
