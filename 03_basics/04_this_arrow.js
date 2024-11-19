const user = {
    username: "saksham",
    price: 199,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

function chai() {
    let username = "saksham"
    console.log(this.username);
}

// chai()

const code = function() {
    let username = "saksham"
    console.log(this.username);
}

// code()

const chaiAurCode = () => {
    let username = "saksham"
    console.log(this.username);
    console.log(this);
}

// chaiAurCode()

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3, 4));

const addThree = (num1, num2, num3) => num1 + num2 + num3

console.log(addThree(4, 2, 5));

const addFour = (num1, num2, num3, num4) => (num1 + num2 + num3 + num4)

console.log(addFour(1, 4, 2, 3));

const myName = () => ({username: "saksham", age: 18})

console.log(myName());
