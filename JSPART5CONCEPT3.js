//Add/Update Value

const student = {
    name: "shradha",
    age: 23,
    marks: 94.4,
    city: "Delhi"
};
student.city = "Mumbai";
console.log(student);
student.gender = "female";
console.log(student);
student.marks = "A";
console.log(student);
student.marks = [99,89,78];
console.log(student);
delete student.marks;
console.log(student);

