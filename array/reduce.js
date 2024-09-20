//process each element in an array and accumulates a single result based on a callback
// array.reduce(function(accumulator, currentValue, index, array) {
//     // return the updated accumulator
//   }, initialValue);
  
//========================================================
//Given the array numbers = [1, 2, 3, 4], use reduce() to calculate the sum of all the numbers. What is the total sum?
let numbers = [1, 2, 3, 4]
let s=numbers.reduce((a,b)=>{
return a+b;
})
console.log(s);//=>10
//===========================================================
// You have an array expenses = [100, 200, 300]. Use reduce() to calculate the total expenses. What is the result?
let expenses = [100, 200, 300]
let d=expenses.reduce((a,b)=>{
    return a+b;
    })
    console.log(d);
//=============================================================