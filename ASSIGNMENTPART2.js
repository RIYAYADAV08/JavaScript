// let num = 12;
// if(num % 10 ==0){
//     console.log("good");
// }
// else{
//     console.log("bad");
// }

// let name = prompt("Enter ur name: ");
// let age = prompt("Enter ur age");
// let msgs = (`${name} is ${age} years old.`);
// alert(msgs);
// console.log(msgs);



// let Quarter = 6;
// switch(Quarter){
//     case 1:
//         console.log("Janauary, February, March");
//     break;
//     case 2:
//         console.log("April May June");
//     break;
//     case 3:
//         console.log("July, August, September");
//     break;
//     case 4 :
//         console.log("October, November, December");
//     break;
//     default :
//     console.log("bhadwe fr mere ko nhi pata");
// }


// let str  = "Ankit";
// if( (str[0]=="a"|| str[0] =="A") && (str.length > 5)){
//     console.log("It is golden");

// }
// else{
//     console.log("It is not golden");
// }


let a = 3;
let b = 4;
let c = 5;
if(a>b){
    if(a>c){
        console.log("a");
    }
    else{
        console.log("c");
    
    }
}
else if(b>a){
    if(b>c){
        console.log("b");
    }
    else{
        console.log("c");
    }
}
else{
    console.log("anything");
}


let num1 = 32;
let num2 = 47852;

if ((num1 % 10) == (num2 % 10)) {
    console.log("numbers have the same last digit which is", num1 % 10);
} else {
    console.log("numbers don't have the same last digit");
}