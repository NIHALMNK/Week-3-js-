// First Order Function
function name(){
  
    return result;
}

//Create a function that simply prints a message and call it directly.
 
function message(){
    console.log("never give up");
    
}
message() //=>'never give up'

//Write a function that accepts a callback and returns the result of the callback.
function call(callback){
    return callback()

}

let he=function(){
    console.log("hii");

}
let result =call(he);
