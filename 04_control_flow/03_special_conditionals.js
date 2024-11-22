// Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10
console.log(val1)

val1 = null ?? 10
console.log(val1);

val1 = undefined ?? 15
console.log(val1);

val1 = undefined ?? null
console.log(val1);

val1 = null ?? undefined
console.log(val1);

// Ternary Operator
let a = 5, b = 10
let maxVal;

maxVal = a > b ? a : b
console.log(maxVal);
