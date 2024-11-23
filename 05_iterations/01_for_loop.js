// for loop

for(let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
}

let myArray = ["flash", "batman", "superman"]

for(let index = 0; index < myArray.length; index++) {
    const element = myArray[index]
    //console.log(element);
}

for(let i = 2; i <= 2; i++) { // nesting of loop (nested loop)
    for(let j = 1; j <= 10; j++) {
        //console.log(`${i} * ${j} = ${i*j}`);
    }
}

// break and continue

for(let i = 1; i <= 10; i++) {
    if(i == 3) {
        console.log("Detected 5");
        break
    }
    console.log(`Value of i is ${i}`);
}

for(let i = 1; i <= 20; i++) {
    if(i % 2 == 1) {
        continue;
    }
    console.log(`Even number: ${i}`);
}
