//Numbers
//Positive(21), Negative(-4)
//Integers- Positive(+), Negative(-) and Zero(0).
//Float with decimal- 2.9, -2.4
// Infinity: Represents infinity.


console.log(10 / 0);  // Infinity
console.log(-10 / 0); // -Infinity
console.log(Infinity + 10); // Infinity
console.log(Infinity * 2);  // Infinity
console.log(Infinity - Infinity); // NaN
console.log(Infinity + Infinity);
console.log(Infinity * Infinity);
console.log(Infinity / Infinity);

console.log(typeof 25);     // number
console.log(typeof 2.5);    // number
console.log(typeof NaN);    // number
console.log(typeof Infinity); // number



// Method	Use
// toFixed()	Formats a number to specified decimal places.
// toString()	Converts a number into a string.
// Number()	Converts a value into a number.
// parseInt()	Parses an integer from a value.
// parseFloat()	Parses a floating-point number.

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
// Number.MAX_SAFE_INTEGER	Largest safe integer.
// Number.MIN_SAFE_INTEGER	Smallest safe integer.
// Number.NaN	Represents Not-a-Number.
// Number.POSITIVE_INFINITY	Represents positive infinity.
// Number.NEGATIVE_INFINITY	Represents negative infinity.

// 7. Important Number Functions
Number.isInteger(10);  // true
Number.isNaN(NaN);     // true
Number.isFinite(100);  // true
Number.isSafeInteger(10); // true