//console.log()- It is used to display output in console.It is used for testing and debugging JavaScript Code .

//Linking JS File
//External JavaScript file can be linked to an HTML file using the script tag with the src attribute.

let a = 4;
let b = 2;
console.log("The total sum is", a + b);

//Template Literals
//Template literals are used to create strings using backticks, which allows variables or expressions to be embedded using ${}.
// let pencilPrice = 20;
// let erasorPrice = 30;
// console.log("The total price is",pencilPrice+erasorPrice,"Rupees.");

// let pencilPrice = 20;
// let erasorPrice = 30;
// let output ="The total price is" +(pencilPrice + erasorPrice)+"Rupees.";
// console.log(output);
//Instead of doing all all this we can do.
let pencilPrice = 20;
let erasorPrice = 30;
console.log(`The total price is ${pencilPrice + erasorPrice} Rupees.`)

//Operators in JS
//Arithmetic Operators(+, -, *, /, %, **).
//Assignment Operators(=, +=, -=, *=, /=, %=, **=).
//Unary Operators(++, --).
//Comparison Operator
//Greater than(>)
//Less than(<)
//Greater than or equal to(>=)
//Less than or equal to(<=)
//==(equal to)
//===(strictly equal to)
//!=(not equal to)
//!==(strictly not equal to)
//Logical

//Comparison Operators
//Comparison operators are used to compare two values and returns a boolean value(true or false).
// let age = 18;
// console.log(age > 18);
// console.log(age >= 18);
// console.log(age < 18);
// console.log(age <= 18);
// console.log(age == 18);
// console.log(age === 18);
// console.log(age != 18);
// console.log(age !== 18);

let n = 19;
let p = "19";
console.log(typeof n);
console.log(typeof p);
console.log(n == p);    //==It compares value, not type.
console.log(n === p);   //===It compares both type and value.
console.log(n!=p);      //!=It compares value, not type.
console.log(n!==p);     //!==It compares both type and value.

//Comparison for Non-numbers           
//General trend - a<b<c<d<e and so on.
//Similary A<B<C .. and so on.
//AND small letters> capital letters.
console.log("a" > "b");
console.log("a" > "A");
console.log("b" < "c");
console.log("B" < "C");
console.log("*" > "$");

//Conditional Statements- Conditional Statements are used to make decisions in a program based on whether a condition is true or false.
//If statement- If statement is used to execute a block of code only when a specified condition is true.
//Else if- Else if is used to check another condition only when the previous if condition is false.
//Else- Else statement is used to execute a block of code when the if condition is false.
//Nested if-else- Nested if-else means writing an if-else statement inside another if-else statement. It can have many levels.


//console.log("before my if statement");
// let age = 23;
// if (age >= 18){
//     console.log("You can vote");
// }
// console.log("after my if statement");

// console.log("before my if statement");
// let age = 14;
// if (age >= 18){
//     console.log("You cannot vote");
// }
// console.log("after my if statement");

// console.log("before my if statement");
// let age = 12;
// if (age > 13){
//     console.log("You can vote");
// }
// if(age < 14){
//     console.log("You cannot vote");
// }
// console.log("after my if statement");


//Else if

// let age = 23;
// if (age > 29){
//     console.log("You can vote.");
// }
// else if(age >13){
//     console.log("You cannot vote.");
// }

// let age = 24;
// if(age >=18){
//     console.log("you can vote.");

// }
// else if(age >= 18){
//     console.log("you cannot vote.")     

let age = 14;
if(age >=18){
    console.log("you can vote.");

}
else if(age >= 18){
    console.log("you cannot vote.")       
}
else if(age < 18){
    console.log("you cannot vote.")
}

let month = "january";

if (month === "january") {
    console.log("winter is here");
} else if (month === "april") {
    console.log("summer is here");
}

// else statement

// let age =18;
// if(age>=18){
//     console.log("You can vote.")
// }
// else{
//     console.log("You cannot vote.")
// }

// let color = "white";

// if (color === "red") {
//     console.log("stop");
// } else if (color === "yellow") {
//     console.log("slow down");
// } else if (color === "green") {
//     console.log("go");
// } else {
//     console.log("traffic light is broken");
// }

//Nested if-else

let marks = 23;
if(marks >20){
    console.log("Pass");
    if(marks >80){
        console.log("Outstanding");
    
    }
    else{
        console.log("A");
    }

}
else{
    console.log("Better Luck Next Time");
}


//Logical Operators
//Logical Operators are used to combine two or more conditions and return a boolean value.
// && → AND
// || → OR
// ! → NOT  - Reverses the Boolean value.
// && Truth Table
// T T T
// T F F
// F T F
// F F F

// || Truth Table
// T  T  T
// T  F  T
// F  T  T
// F  F  F

// let marks = 75;
// if(marks >=33 && marks >=74){
//     console.log("Pass");
//     console.log("A+");
// }

// let marks = 75;
// if(marks >=33 || marks >=74){
//     console.log("Pass");
//     console.log("A+");
// }


let ages = 20;
console.log(!(ages >= 18));    //False     

// let marks = 75;
// if(marks >=33 && marks >=74 || !false){  //Jab bhi aise check karna hai tab left se right dekhte hain)
//    console.log("Pass");
//    console.log("A+");
// }

//Switch Statement → Used when we have some fixed values that we need to compare to.
let color = "red";
switch(color) {
    case "red":
        console.log("stop");
        break;
    case "yellow" :
        console.log("wait");
        break;
    case "green":
        console.log("go");
        break;
    default:
        console.log("Broken Light");
}

let day = 1;
switch(day){
    case 1 :
    console.log("Monday");
    break;
    case 2 :
    console.log("Tuesday");
    break;
    case 3 :
    console.log("Wednesday");
    break;
    case 4 :
    console.log("Thursday");
    break;
    case 5 :
    console.log("Friday");
    break;
    case 6 :
    console.log("Saturday");
    break;
    case 7 :
    console.log("Sunday");
    break;
    default :
    console.log("Else nothing")

}


//Alert 
//It displays an alert message on the page.

alert("something is wrong");

//For printing error
console.error("This is error");

//For printing warning
console.warn("This is a warning message");


//Prompt 
//It displays a dialog box that asks user for some input. 
prompt("Enter your rollno.")

// let firstName = prompt("Enter your name : ")
// console.log(firstName);

let firstName = prompt("Enter your firstName");
let lastName = prompt("Enter your lastName");
let msg = (`Welcome ${firstName + " " + lastName}.`)
alert(msg);
