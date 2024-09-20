// call

/*You have an object person = { name: 'John' } and a 
function greet that logs a greeting message. Use call() 
to invoke the greet function and pass the person 
object as the context (this). */

function greet(name){
    console.log(`hello :${this.name}`);
}                  //'hello :john'
person={
    name:"john",

}
greet.call(person) //this is the purpose of call

//==================================================================
// Write a function addNumbers(a, b, c) that adds three numbers. Use call() to invoke the function with a set of numbers, passing the values directly as arguments.


function addNumbers(a,b,c){

return a+b+c;
}

// console.log(addNumbers(1,2,3));
const result=addNumbers.call(null,1,2,3)

console.log(result);
