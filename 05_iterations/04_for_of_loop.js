// for of loop
// ["", "", ""]
// [ {}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for(const num of arr) {
    //console.log(num);
}

const greetings = "Hello World!"
for(const greet of greetings) {
    if(greet == ' ') {
        continue
    }
    //console.log(`Each char is ${greet}`);
}

const map = new Map();
map.set('IN', 'India')
map.set('Fr', 'France')
map.set('IN', 'India')

//console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    game1 : "FF",
    game2 : "BGMI"
}

// for (const [key] of myObject) {
//     console.log(key)
// }
