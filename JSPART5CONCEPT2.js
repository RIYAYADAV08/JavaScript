// Get Values
// JavaScript automatically converts object keys to strings, even if the key is a number, true, null, or undefined.
const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
};


console.log(obj[1]);
console.log(obj[2]);
console.log(obj[null]);
console.log(obj[true]);
console.log(obj[undefined]);
