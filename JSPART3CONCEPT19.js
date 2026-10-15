//Nested Array - A nested array is an array that contains one or more arrays as its elements.
let nums = [[2, 4], [3, 6], [4, 8]];
console.log(nums);
console.log(nums.length);
console.log(nums[0]);
console.log(nums[0].length);
console.log(nums[0][0]);
console.log(nums[1][2]);

//Method           //Original Array
// push()	       ✅ Changes
// pop()	       ✅ Changes
// unshift()	   ✅ Changes
// shift()	       ✅ Changes
// splice()	       ✅ Changes
// sort()	       ✅ Changes
// reverse()	   ✅ Changes
// slice()	       ❌ Does not change
// concat()	       ❌ Does not change
// includes()	   ❌ Does not change
// indexOf()	   ❌ Does not change