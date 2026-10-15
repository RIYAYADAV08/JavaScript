const favouritemovie = "animal";
let guess = prompt("Enter my favourite movie");
while ((guess != favouritemovie) && (guess != "quit")) {
    guess = prompt("Wrong guess! please try again");
}
if (guess == favouritemovie) {
    console.log("Congratulations");
} else {
    console.log("you quit")
}