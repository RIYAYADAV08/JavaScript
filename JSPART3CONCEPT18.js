// A constant array is an array declared using const. Its elements can be modified, but the array variable cannot be reassigned to a new array.

const arr = [1,2,3];
arr.push(4);
console.log(arr);
arr = [4,5,6];
console.log(arr);