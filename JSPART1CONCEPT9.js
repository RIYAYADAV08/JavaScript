//let var const
//There are three variable declaration keywords:

//1.let
//It is mostly used.
//It can be reassigned but can not be redeclared in the same scope.
//It is recommended when variable's value may change.
//It is block-scoped.

let a = 10;
console.log(a);

let b;
console.log(b);

let age = 23;
age = age + 2;
console.log(age);

let cgpa;
cgpa = 7.31;
console.log(cgpa)
cgpa = 7.57 * 10;
console.log(cgpa);

let side = 2;
let area = side * 2;
console.log(area);

//const
//It is less used.
//It is used for variables whose values are constant.
//It can not be reassigned or redeclared.
//It is block-scoped.

const pi = 2.14
let radius = 3;
let areas = pi * radius * radius;
console.log(areas);

//var
//It is an old syntax of writing variables.
//It can be both reassigned or redeclared.
//It is function- scoped.

var m = 12;
var m = 13;
m = 14;
console.log(m);