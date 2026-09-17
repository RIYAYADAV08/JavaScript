let months = ["January", "July", "March", "August"];
months.shift();
console.log(months);
months.shift();
console.log(months);
months.unshift("june");
console.log(months);
months.unshift("july");
console.log(months);



let msg = "help!";
console.log(msg.trim().toUpperCase());

let name = "ApnaCollege";
console.log(name.slice(4,9));
console.log(name.indexOf("na"));
console.log(name.replace("Apna", "Our"));

console.log(name.slice(4).replace("l", "t").replace("l", "t"));



let start = ["january", "july", "march", "august"]
start.splice(0,1);
start.splice(1,0, "june");
console.log(start);


let array = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];
console.log(array.reverse());
console.log(array.indexOf('javascript'));
