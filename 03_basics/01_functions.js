function sayMyName() {
    console.log('S');
    console.log('A');
    console.log('M');
}

// sayMyName()

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

// addTwoNumbers(3, 5)

function addTwoNumbers(num1, num2) {

    // let result = num1 + num2
    // return result
    
    return num1 + num2
}

const result = addTwoNumbers(4, 9)
console.log("Result:", result);

function loginUserMessage(username = "SAM") {
    if(!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in.`
}

console.log(loginUserMessage());
console.log(loginUserMessage("SAKSHAM"));
