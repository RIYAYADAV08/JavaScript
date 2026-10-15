//Splice - It adds, removes, or replaces elements in an array.
//syntax= splice(start, deletecount, item0...itemN)
let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
console.log(colors.splice(4));
console.log(colors);
console.log(colors.splice(0, 1));
console.log(colors);
console.log(colors.splice(0, 1, "black", "grey"));
console.log(colors);
console.log(colors.splice(1, 2));
console.log(colors);
console.log(colors.splice(0, 0, "kite", "violet", "purple"));
console.log(colors);
console.log(colors.splice(2, 0, "Mergenta"));
console.log(colors);
console.log(colors.splice(1, 1, "Green"));
console.log(colors);