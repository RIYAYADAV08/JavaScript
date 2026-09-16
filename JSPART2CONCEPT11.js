// Truthy: A value that is treated as true in a Boolean context.
// Falsy: A value that is treated as false in a Boolean context.
// Falsy Values- false, 0, -0, 0n (BigInt value), "" (empty string), null, undefined, NaN
// Truthy Values- Everything else



// if ("") {
//     console.log("it has true value");
// } else {                              //false becz of empty string
//     console.log("it has false value");
// }



// if (" ") {
//     console.log("it has true value");
// } else {                               //true becz of space in empty string
//     console.log("it has false value");
// }



let string = "";

if (string) {
    console.log("string is not empty");
} else {
    console.log("string is empty");
}

let num = -10;

if (num) {
    console.log("num is not equal to 0");
} else {
    console.log("num is equal to 0");
}