//to take a copy(shallow copy) of the array (for wanted space)

//Given the array numbers = [1, 2, 3, 4, 5], use slice() to create a new array containing the second to fourth elements. What does the new array look like?

let numbers = [1, 2, 3, 4, 5]
let a=numbers.slice(1,3)
console.log(numbers);//=>[ 1, 2, 3, 4, 5 ]
console.log(a);//=>[ 2, 3 ] 

//=========================================================
//You have an array letters = ['a', 'b', 'c', 'd']. Use slice() to create a copy of the array. What does the new array look like?

let letters = ['a', 'b', 'c', 'd']
let b=letters.slice()
console.log(b);//=>['a', 'b', 'c', 'd']

//=============================================================
