//apply

mathOperations = {
    number:1,
    number2:2,
    number3:3,
}
function sumNumbers(a,b,c){
    let result = a+b+c;
    return result;
}

let result=sumNumbers.apply(null,[mathOperations.number,mathOperations.number2,mathOperations.number3])

console.log(result);


//==================================================
/*Write a function maxOfArray() that returns the maximum value in an array. Use apply() with Math.max to find the maximum value in an array [10, 5, 8, 20].*/

function maxofarray(a){
    return Math.max.apply(null,a)
}
const arr =[1,2,3,4,5]
let s=maxofarray(arr)
console.log(s);


