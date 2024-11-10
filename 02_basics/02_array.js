const names = ["saksham", "sharad", "aniket"]
const cartoon = ["oggy", "jack", "pablu"]

//push
// names.push(cartoon)

// console.log(names);
// console.log(names[3][2]);

const NAME = ["saksham", "sharad", "aniket"]
const CARTOON = ["oggy", "jack", "pablu"]

//concat
const allCartoon = NAME.concat(CARTOON)
// console.log(allCartoon);

//spread
const all_new_heros = [...NAME, ...CARTOON]
// console.log(all_new_heros);

//flat
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

//isArray
console.log(console.log(Array.isArray("saksham")));

//Array.from
console.log(Array.from("saksham"));
console.log(Array.from({name: "saksham"}));     // []

//Array.of
let a = 100
let b = 200
let c = 300

console.log(Array.of(a, b, c));
