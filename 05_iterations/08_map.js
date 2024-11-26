const myNum = [1, 2, 3, 4, 5]

let newNum = myNum.map( (num) => num + 10)

console.log(newNum);

newNum = myNum.map((num) => num * 10)
              .map((num) => num + 1)
              .filter((num) => num >= 30)

console.log(newNum)
