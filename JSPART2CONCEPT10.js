//Nested if-else- Nested if-else means writing an if-else statement inside another if-else statement. It can have many levels.
let marks = 23;
if (marks > 20) {
    console.log("Pass");
    if (marks > 80) {
        console.log("Outstanding");

    }
    else {
        console.log("A");
    }

}
else {
    console.log("Better Luck Next Time");
}