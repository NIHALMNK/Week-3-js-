//Write a function that multiplies all arguments passed to it using rest parameters.

function A(...num){
return num.reduce((a,b)=>a*b,1);
}
console.log(A(1,2,3,));//=> 6
//=======================================
//Implement a function that returns the first argument and collects the rest using the rest parameter.

function B(a,...b){
    console.log(b);
    
return a;
}

console.log(B(1,2,3,4,5,6))//=>1

