function calculateCartPrices(val1, val2, ...nums) {
    return nums;
}

// console.log(calculateCartPrices(100, 300, 200, 400));

const user = {
    username: "saksham",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);
// handleObject({
//     username: "sam",
//     price: 300
// })

function returnSecondValue(getArray) {
    return getArray[1]
}

const myArray = [100, 300, 200, 150]

console.log(returnSecondValue(myArray));

console.log(returnSecondValue([200, 800, 300, 100]));
