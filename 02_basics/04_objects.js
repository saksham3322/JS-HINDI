// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "saksham"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullName: {
            firstName: "saksham",
            lastName: "maurya"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userFullName.firstName);
// console.log(regularUser.fullname.userFullName.lastName);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj4 = {obj1, obj2, obj3}
// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

const users = [
    {
        id: 1,
        email: "u1@gmail.com"
    },
    {
        id: 2,
        email: "u2@gmail.com"
    },
    {
        id: 3,
        email: "u3@gmail.com"
    },
]
// console.log(users);
// console.log(users[1]);
// console.log(users[2].email);

// --------Object De-structure and JSON API Intro---------
const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "saksham"
}

console.log(course.courseInstructor);

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// --------JSON Format & API Intro---------

// {
//     "name": "saksham",
//     "courseName": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
