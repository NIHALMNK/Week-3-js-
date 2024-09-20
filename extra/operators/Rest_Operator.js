//rest parameter
// ...
//Write a function that takes any number of arguments and returns their sum using the rest operator.

function a(...rest){
 return rest.reduce((a,b)=>a+b,0) //for take one by  one items
}
console.log(a(1,2,3,4,5,6,7));  //=>28

//Create a function that logs all arguments passed to it using the rest operator.
function b(...log){
return log;
}
let s=b(1,2,3,4,5,6,7,8,9)
console.log(s);  //=>Array(9) [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
