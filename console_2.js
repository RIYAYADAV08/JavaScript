// Using the console
// It uses REPL(Read Evaluate Print Loop). 
// Press CTRL + L for clearing the console.

// console.log()- It is used to display output in console. It is used for testing and debugging JavaScript code.  

//console.error()- It is used to display error messages in the console.
console.error("Something went wrong");

//console.warn()- It is used to display warning messages in the console.
console.warn("This is mine");

//console.table()- It is used to display data in a tabular format in the console.
console.table([{
    name: "riya", age: 23,
    name: "aman", age: 24
}]);

// console.info() - It is used to display informational messages in the console.
console.info("JavaScript learning started");

// console.clear() - It clears all msgs from the console.
console.clear();


// console.group() - It groups related console messages together.
console.group("Student Details");
console.log("Name: Riya");
console.log("Age: 21");


// console.groupEnd() - It ends the current console group.
console.group("Student Details");
console.log("Name: Riya");
console.groupEnd();


// console.count() - It counts how many times a particular label has been called.
console.count("Click");
console.count("Click");
console.count("Click");