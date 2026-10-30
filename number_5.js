//Numbers
//Positive(21), Negative(-4)
//Integers- Positive(+), Negative(-) and Zero(0).
//Float with decimal- 2.9, -2.4
// Infinity: It represents an infinite value.


console.log(10 / 0);
console.log(-10 / 0);
console.log(Infinity + 10);
console.log(Infinity * 2);
console.log(Infinity - 19);
console.log(Infinity / 98);
console.log(Infinity - Infinity);
console.log(Infinity + Infinity);
console.log(Infinity * Infinity);
console.log(Infinity / Infinity);
console.log(Infinity / 2);
console.log(2 / Infinity);

console.log(typeof 25);
console.log(typeof 2.5);
console.log(typeof NaN);
console.log(typeof Infinity);

// Method	     Use
// toFixed() - It formats a number to specified decimal places.
// toString() - It converts a number into a string.
// Number()	- It converts a value into a number.
// parseInt()- It parses an integer from a value.
// parseFloat()	- It parses a floating-point number.

let num = 12.567;
console.log(num.toFixed(2));       // "12.57"
console.log(num.toString());       // "12.567"
console.log(Number("100"));        // 100
console.log(parseInt("25.5"));     // 25
console.log(parseFloat("25.5"));   // 25.5


// Number Properties
// Property	Use
// Number.MAX_VALUE	Largest representable positive number.
// Number.MIN_VALUE	Smallest positive number greater than zero.
// Number.MAX_SAFE_INTEGER	Largest safe integer.(Minimum: -9007199254740991 Maximum: 9007199254740991)
// Number.MIN_SAFE_INTEGER	Smallest safe integer.
// Number.NaN	Represents Not-a-Number.
// Number.POSITIVE_INFINITY	Represents positive infinity.
// Number.NEGATIVE_INFINITY	Represents negative infinity.

Number.isInteger(10);  // true
Number.isNaN(NaN);     // true
Number.isFinite(100);  // true
Number.isSafeInteger(10); // true
console.log(Number.MIN_SAFE_INTEGER); // Smallest safe Integer: -9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // Largest safe Integer: 9007199254740991