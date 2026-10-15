//Array reference- An array reference is a reference to the memory location of an array. When one array is assigned to another, both variables refer to the same array.

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2[0] = 10;
console.log(arr1);


// let a = [1, 2, 3];
// let b = a;
// console.log(a == b); 
// console.log(a === b); 


let a = [1, 2, 3];
let b = [1, 2, 3];
console.log(a == b); // false
console.log(a === b); // false   //values same hai but reference different hai