//Array References
//An array reference is a reference to the memory location of an array. When one array variable is assigned to another, both variables refer to the same array in memory.
let arr = ['a', 'b', 'c'];

let arrCopy = arr;

arr == arrCopy; // true

arr.push('d');

console.log(arr);
console.log(arrCopy);

arrCopy.pop();

console.log(arrCopy);
console.log(arr);