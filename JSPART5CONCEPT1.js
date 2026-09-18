//Object Literals- An object is a collection of properties, where each property is stored as a key-value pair using curly braces {}.

const students ={
    name : "Riya",
    age : 21,
    marks : 95,
};
console.log(students);


const item = {
    price: 100.99,
    discount: 50,
    colors: ["red", "pink"]               //object ke andar array bhi store kar sakte hain.
};
console.log(item);


const post = {
    username: "@shradhakhapra",
    content: "This is my #firstPost",
    likes: 150,
    reposts: 5,
    tags: ["@apnacollege", "@delta"]
};
console.log(post);



//For accessing
console.log(post["content"]);
//or
console.log(post.content);
console.log(post.tags);
console.log(post.tags[0]);

let prop = "reposts"
console.log(post[prop]);