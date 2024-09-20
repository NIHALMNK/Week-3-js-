//to create a new array by filtering out elements from an existing array with a condition or not.

// let newArray = array.filter(function(currentValue, index, array) {
//     // return condition (true or false)
//     }, thisArg);
//=====================================================
//Given the array numbers = [5, 12, 8, 130, 44], use filter() to create a new array with numbers greater than 10. What does the new array look like?
let numbers = [5, 12, 8, 130, 44]
let f=numbers.filter((a)=>{
return a>10;
});
console.log(f);//==>[ 12, 130, 44 ]
//=======================================================
//You have an array ages = [16, 21, 18, 30]. Use filter() to create an array of ages greater than or equal to 18. What is the result?
let ages = [16, 21, 18, 30]
let g=ages.filter((a)=>{
return a>=18;
})

console.log(g);//==>[ 21, 18, 30 ]
//==========================================================
