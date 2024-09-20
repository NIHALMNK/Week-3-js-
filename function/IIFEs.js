//Self-Invoking Functions
(function(){
    console.log("hello")
})();

//Create a self-invoking function that takes two numbers and prints their sum.
let result=0;  
(function(a,b){
  result=a+b;
    return result;
})(2,3)

console.log(result);
