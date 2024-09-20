// create a Anonymous Function

// function(){

// };

//Write an anonymous function that returns the cube of a number and assign it to a variable.

let a=function(num){
    return num*num*num;
}
console.log(a(5)); //=> 125

//Use an anonymous function inside a setTimeout to log a message after 3 seconds.

setTimeout(function(){
    console.log("hii guys....");
},3000);

console.log(a(5)); //=> 125
