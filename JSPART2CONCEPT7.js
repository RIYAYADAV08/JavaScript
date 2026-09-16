//Else-if
//Else-if is used to check another condition only when the previous if conditon is false.
//We can write multiple elseif in our code.


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
//     console.log("you cannot vote.")       //agar if wali condition false hui tabhi else if check hoga ab dekh dono condition same hai toh bas if wala print ho gaya 
// }


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
if(month ==="january"){
    console.log("winter is here");

}
else if(month ==="april"){
    console.log("summer is here");
}