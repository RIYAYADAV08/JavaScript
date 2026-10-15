//Print all old numbers(1 to 15)
for (let i = 1; i <= 15; i = i + 2) {
    console.log(i);
}

//backwards
for (let i = 15; i >= 1; i = i - 2) {
    console.log(i);
}

//Print all even numbers(2 to 10)
for (let i = 2; i <= 10; i = i + 2) {
    console.log(i);
}

//backwards
for (let i = 10; i >= 2; i = i - 2) {
    console.log(i);
}

//Print multiplication table of 5
for (let i = 5; i <= 50; i = i + 5) {
    console.log(i);
}

let n = parseInt(prompt("Enter the number"));            //propmt string me hota h use int me convert karne ke liye
for (let i = n; i <= n * 10; i = i + n) {
    console.log(i);
}
