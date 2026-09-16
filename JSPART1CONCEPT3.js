//Let var const
//There are three variable declaration keywords.

//Let
//It is mostly used.
//It can be reassigned but cannot be redeclared in the same scope.
//It is recommended when variable's value may change.
//It is block-scoped.

let a = 4;
console.log(a);


let b;
console.log(b)

let age = 23;
age = age + 2;
console.log(age);

let cgpa;
cgpa = 7.49;
console.log(cgpa);
cgpa = 7.49 * 10;
console.log(cgpa);

let side = 2;
let area = side * 2;
console.log(area);

//const
//const is used for variables whose values are constant.
//It can not be reassigned or redeclared.
//It is block-scoped.
//It is less used.

const pi = 3.14;
let radius = 2;
let areas = pi * radius * radius;
console.log(areas);

//var- It is an old syntax of writing variables.
//It can not be both reassigned or redeclared.
//It is function-scoped.

var m = 10;
var m = 20;
m = 30;
console.log(m);