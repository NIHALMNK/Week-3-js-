//it used to fill(instead of do values) values as an elements 
//Given the array arr = [1, 2, 3, 4], use fill(0, 1, 3) to replace elements. What is the result?
let arr = [1, 2, 3, 4]
let s=arr.fill(0,1,3);
console.log(s);//=>[ 1, 0, 0, 4 ]
//======================================
//You have an array arr = [5, 6, 7, 8]. Use fill(9) to replace all elements with 9. What does the array look like now?
let ar = [5, 6, 7, 8]
let d=ar.fill(9)
console.log(d);//=>[ 9, 9, 9, 9 ]
