//create a Named Function Expression.

let na=function name(parameter){

}

//Create a named function expression to check if a number is prime.

let p=function prime(num){

    if(num<=1){
        console.log("it is not a prime number");
        return false;
    };
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0){
            console.log("it is not a prime number");
            return false;
           
        }
    }
    console.log("it is a prime number");
    return true;

}
console.log(p(7)); //=>true

//Write a named function expression to reverse a string.

let backs=function re(a){
   let rr= a.split('').reverse().join('');
    console.log(rr); //=> iih
    return rr;
}

 backs("hii");
 
