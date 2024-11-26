// const coding = ["js", "python", "java"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })
// console.log(values);

const myNums = [1, 2, 3, 4, 5]

// const newNums = myNums.filter( (num) => num >= 3)
// console.log(newNums);

// const newArray = []

// myNums.forEach((num) => {
//     if(num >= 4) {
//         newArray.push(num)
//     }
// })

// console.log(newArray);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981},
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992},
    { title: 'Book Three', genre: 'History', publish: 1999},
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989},
    { title: 'Book Five', genre: 'Science', publish: 2009},
    { title: 'Book Six', genre: 'Fiction', publish: 1987},
    { title: 'Book Seven', genre: 'History', publish: 1986},
    { title: 'Book Eight', genre: 'Science', publish: 2011},
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981},
]

let userBooks = books.filter((bk) => bk.genre === "History")

console.log(userBooks);

userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})

console.log(userBooks);
