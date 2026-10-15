//Const array- A const array is an array declared using const. The array cannot be reaasigned, but its element can be modified.

const arr = [1, 2, 3];
arr[0] = 10;
arr.push(4);
console.log(arr);
arr = [5, 6, 7];
console.log(arr);