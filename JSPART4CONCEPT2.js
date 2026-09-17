//Print all odd numbers(1 to 15)

for(i = 1 ; i<=15; i = i+2){
    console.log(i);
}


for(i = 15 ; i>=1; i = i-2){
    console.log(i);
}

//Print all even numbers(2 to 10)
for(i = 2 ; i<=10; i = i+2){
    console.log(i);
}


for(i = 10 ; i>=2; i = i-2){
    console.log(i);
}

//Print multiplication table of 5
for(i = 5 ; i <= 50; i = i + 5 ){
    console.log(i);
}

let n = prompt("Write your number");
n = parseInt(n);             //propmt string me hota h use int me convert karne ke liye

for(let i = n; i<=n*10 ;i = i+n){
    console.log(i);
}

