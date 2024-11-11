//singleton
//Object.create

//Object literals
const mySym = Symbol("key1")

const jsUser = {
    name : "Saksham",
    "full name" : "Saksham Maurya",
    [mySym] : "mykey1",
    age : 18,
    location : "Jaunpur",
    email : "saksham@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "saksham@openai.com"
// Object.freeze(jsUser)
jsUser.email = "saksham@microsoft.com"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());
