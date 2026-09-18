let color = "yellow";
if(color == "red"){
    console.log("Stop");
}
if(color == "green"){
    console.log("Wait");
}
if(color == "yellow"){
    console.log("Go")
}

let size = "XL";
if(size === "XL"){
    console.log("Price is Rs.250");
}
else if(size === "L"){
    console.log("Price is Rs.200");
}
else if(size === "M"){
    console.log("Price is Rs.100");
}
else if(size === "S"){
    console.log("Price is Rs.50");
}
else {
    console.log("Size not found");
}


let str = "aman";
if((str[0]=="a")&& (str.length > 3)){
    console.log("Good string")
}
else{
    console.log("Not good string")
}

let num = 12;
if ((num % 3 === 0) && ((num + 1 == 15) || (num - 1 == 11))) {
    console.log("safe");
} else {
    console.log("unsafe");
}