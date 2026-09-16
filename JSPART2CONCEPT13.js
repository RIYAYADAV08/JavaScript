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