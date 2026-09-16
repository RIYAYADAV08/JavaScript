//Nested if-else means writing an if-else statement inside another if-else statements.It can have many levels.
let marks = 95;
if(marks>= 35){
    console.log("Pass");
    if(marks>= 80){
        console.log("Outstanding");
    }
    else{
        console.log("A")
    }
}
else{
    console.log("better luck next time!");
}