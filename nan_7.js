// NaN- NaN stands for Not-a-Number. It represents a value that results from an operation that does not produce a valid number.
console.log("Hello" / 2);
console.log(0 / 0);
console.log(NaN + 1);
console.log(NaN * NaN);
console.log(NaN + NaN);
console.log(Number("abc"));
console.log(Math.sqrt(-1));         //JavaScript mein sabhi negative numbers ka square root NaN deta hai.
console.log(typeof NaN);
console.log(NaN === NaN); // false
console.log(Number.isNaN(NaN));
//Why is NaN === NaN false? Because NaN is not equal to any value, including itself, according to JavaScript's numeric equality rules.