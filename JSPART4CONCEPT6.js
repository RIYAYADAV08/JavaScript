const favouritemovie = "Animal";
let guess = prompt("Enter the movie name");
while(guess!= favouritemovie){
    if(guess == "quit"){
        console.log("quit");
        break;
    }
    guess = prompt("Enter the next name");
}
if(guess = favouritemovie){
    console.log("Congratulations");

}