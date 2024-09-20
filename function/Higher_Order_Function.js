//Higher Order Function

function a(num1,num2,operation){
    //=>
    return operation(num1,num2);
}
//Write a function that takes two functions as arguments, executes both, and returns the result.
function calculate(num1,num2,operation){

return operation(num1,num2);
}

let add=function(a,b){
    let result=a+b;
    return result;
}

let sub=function(a,b){
    let result=a-b;
    return result;
}

console.log(calculate(4,5, add));//=>9
console.log(calculate(55,5,sub))//=>50

//Implement a higher-order function that multiplies each element in an array by 2.


function multi(arr){
return arr.map(function(ele){
    return ele*2;
});
}

let ar=[2,4,6,8,10]
let result=multi(ar);

console.log(result); //=>[ 4, 8, 12, 16, 20 ]
console.log(ar);//=> [ 2, 4, 6, 8, 10 ]
