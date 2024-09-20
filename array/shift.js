//for remove the first element
//Given the array students = ['Alice', 'Bob', 'Charlie'], use shift() to remove the first student. What does the array look like afterward?

let  students = ['Alice', 'Bob', 'Charlie']

let r=students.shift()
console.log(students);//=>[ 'Bob', 'Charlie' ] 
console.log("the removed element is :"+r);//=>'the removed element is :Alice'

//============================================
//You have an array tasks = ['task1', 'task2', 'task3']. Use shift() to remove the first task and store it in a variable. What is the removed task?
let tasks = ['task1', 'task2', 'task3']
let c=tasks.shift()
console.log(c);//=> task1
