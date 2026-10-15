// Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any positive number].
// For example: for array [7, 9, 0, -2] and n=3
// Print, [7,9, 0]
let arr = [7, 9, 0, -2];
let n = 3;
console.log(arr.slice(0, n));


// Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any positive number].
// For example: for array [7, 9, 0, -2] and n=3
// Print, [9, 0, -2]
let arr1 = [7, 9, 0, -2];
let n1 = 3;
console.log(arr1.slice(1, arr1.length))
//or 
console.log(arr.slice(arr.length - n));
//or
console.log(arr.slice(-n));


//Qs3. Write a JavaScript program to check whether a string is blank or not.
let str = ""
if (str.length == 0) {
    console.log("string is blank");

}
else {
    console.log("not blank");
}


//Qs4. Write a JavaScript program to test whether the character at the given (character) index is lower case.
let string = "Harsh";
let idx = 4;

if (string[idx] >= "a" && string[idx] <= "z") {
    console.log("character is lowercase");
}
else if (string[idx] >= "A" && string[idx] <= "Z") {
    console.log("character is uppercase");
}
else {
    console.log("Not a letter");
}

// Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.
let msg = "         riya               ";
console.log(msg.trim());


// Qs6. Write a JavaScript program to check if an element exists in an array or not.
let arrr = ["hello", 'a', 23, 64, 99];
let item = 64;
console.log(arrr.includes(64));