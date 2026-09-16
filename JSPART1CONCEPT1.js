//What is JavaScript?
//JavaScript is a high level, interpreted programming language promarly used to add interactivity and dynamic behaviour to web pages.It works with HTML and CSS to build modern web applications and can also be used for backend development through Node.js.

//Is Java and JavaScript are same ?
//No, Java and JavaScript are different programming languages. Java is mainly used for backend development, while JavaScript is primarily used for web development.

//Why do we use JavaScript?
//JavaScript is used to make web pages dynamic and interactive, such as form validations, animations, button click events, and API calls.


//console.log() - It is used to display output in console. It is used for testing and debugging JavaScript code.

//Features Of JavaScript
//JavaScript is a high-level language as it is easy to read and write, and we don't need to deal with low-level machine details.
//JavaScript is dynamically typed as the type of a variable is decided automatically at run-time.
//JavaScript is object-oriented language as it allows us to organize data and functionality using classes.
//JavaScript is event-driven because it can respond to events like clicks, key presses and mouse movements.
//JavaScript is cross-platform language as it can run on different operating systems and web-browsers.
//JavaScript is interpreted language as it is executed at run-time by a JavaScript Engine.Modern Engine also use JIT(Just-in-time) compilation for better performance.

//Advantages of JavaScript
//Fast execution
//Easy to learn
//Versatile
//Platform independent
//Lightweight

//Disadvantages of JavaScript
//Security Issues
//Difficult debugging
//Dynamic Typing can cause errors.
//Single-threaded
//Browser-Dependency


//Variables 
//A variable is simply the name of a storage location.
//Ex- age = 23; 

//Data Types
//Datatypes tells us what kind of value a variable stores.
//Primitive data type-7
// Number	let age = 21;	Numbers, including integers & decimals
// Boolean	let isStudent = true;	true or false
// String	let name = "Riya";	Text
// Undefined	let x;	Value not assigned
// Null	    let y = null;	Intentionally empty value
// BigInt	let n = 12345678901234567890n;	Very large integers
// Symbol	let id = Symbol("id");	Unique identifier


//Numbers 
//Positive(7), Negative(-8)
//Integers- -57, 56, 0 (Integers include positive, negative and zero)
//Float with decimals- 2.3 -8.9


//NaN(Not-a-Number)is a special numeric value that represents the result of an operation that does not produce a valid number.
let num = 0/0;
console.log(num);

let num1 = "Nan * 1";
console.log(num1);

let num2 ="Nan * Nan";
console.log(num2);

let num3 = "Nan + Nan";
console.log(num3);


//Operator Precedence
//Operator Precedence tells us which operator is evaluated first when an expression contains multiple operators.
// 1.()  
// 2.**  (when multiple power operators are given then we will move from right to left).
// 3./ * %   priority same left-right
// 4.+,-     priority same left-right 
console.log(4+1*6/2);


//Null and Undefined
//Undefined- A variable that has not been assigned a value is of type undefined.
//Null- The null value represents the intentional absence of any object value.

let a;
console.log(a);

let b = null;
console.log(b);