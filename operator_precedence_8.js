//Operator Precedence
//Operator Precedence tells us which operator is eveluated first when an expression contains multiple operators.
// 1.()
// 2.**        if multiple power operators are given, we will check from right to left.
// 3.%, *, /   priority same left to right
// 4. +, -     priority same left to right

console.log(2 + 3 * 4);
console.log((2 + 3) * 4);
console.log(2 ** 3 ** 2);
console.log(20 / 5 * 2);  