//to merge two arrays
//Given two arrays arr1 = [1, 2] and arr2 = [3, 4], use concat() to combine them into a new array. What does the new array look like?
let arr1 = [1, 2]
let arr2 = [3, 4]
let arr3 = [5, 6]

let mix=arr1.concat(arr2,arr3)
console.log(mix);//=>Array(6) [ 1, 2, 3, 4, 5, 6 ]
//===========================================================================
//You have arrays fruits = ['apple', 'banana'] and vegetables = ['carrot', 'lettuce']. Use concat() to combine them. What is the result?
let fruits = ['apple', 'banana']
let vegetables = ['carrot', 'lettuce']

let g=fruits.concat(vegetables);
console.log(g);//==>[ 'apple', 'banana', 'carrot', 'lettuce' ]

//=========================================================================