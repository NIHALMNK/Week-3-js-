//to solve the nested arrays
//Given the array arr = [1, [2, [3, [4]]]], use flat() with depth 2 to flatten the array. What is the result?
let arr = [1, [2, [3, [4]]]]
let de=arr.flat(2);
console.log(de);//=>[ 1, 2, 3, [ 4 ] ]

//============================================
//You have an array arr = [1, [2, 3], [4, 5]]. Use flat() to flatten the array to one level. What does the new array look like?
let ar = [1, [2, [3, [4]]]]
let m=ar.flat(Infinity)
console.log(m);

//==============================================
