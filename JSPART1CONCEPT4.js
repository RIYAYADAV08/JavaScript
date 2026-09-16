//Assignment Operator
//Assignment operator is used to assign a value to a variable.
//We have multiple assignment operators are there.
// =
// +=
// -=
// *=
// /=
// %=
// **=


// let a = 45;
// a+= 47;
// console.log(a);

// let b = 2;
// b **= 3;
// console.log(b);


//Unary Operator
//Unary operator is the operator that work on only one operand(one value or one variable).

let a = 34;
a++;
console.log(a);
a++;
console.log(a);

let b = 35;
b--;
console.log(b);
b--;
console.log(b);
b--;
console.log(b);

//There are two types also:
//Pre-increment
//First increment the value,then return the updated value.
let d = 5;
let newd = ++d;
console.log(d);
console.log(newd);

//Post increment 
//First returns the value then increments it.
let e = 10;
let newe = e++;
console.log(e);
console.log(newe);

//Practice question;
let num = 5;
let newNum = num++;
console.log(num);
console.log(newNum);
newNum = ++num;
console.log(num);
console.log(newNum);