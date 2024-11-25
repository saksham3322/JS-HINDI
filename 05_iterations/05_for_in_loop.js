//for in loop

const myObject = {
    js : 'javascript',
    cpp : 'C++',
    py : 'python'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "python", "java"]

for(const key in programming) {
    console.log(programming[key]);
}

const map = new Map()
map.set('IN', 'India')
map.set('Fr', 'France')
map.set('In', 'India')

for(const key in map) { // map is not iteratable
    console.log(key);
}
