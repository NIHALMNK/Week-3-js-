//Given an object employee = { id: 1, details: { name: "Alice", age: 25 } }, destructure to get the name inside details.
let employee = { id: 1, details: { name: "Alice", age: 25 } }

let {id,details:{name,age}}=employee;

console.log(id);//=>1
console.log(name);//=>Alice
console.log(age);//=>25
//=========================================================================
// If you have a student = { name: 'Tom', grades: { math: 90, science: 85 } }, how can you destructure to extract math and science grades?
let student = { name: 'Tom', grades: { math: 90, science: 85 } };

let {grades:{math,science}}=student;
console.log(math)//=>90
console.log(science)//=>85
//========================================================
