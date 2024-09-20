function add(a){
    
    return function (b){

        return function (c){
            return a+b+c;
        }
    }
}
let result =add(10)(5)(5);
console.log(result);
//==========================================
//Convert a normal function into a curried function for multiplying two numbers.

//currying method
function multi(a){
    return function(b){
        return a*b;
    }
}
let m=multi(2)(3)
console.log(m);

//normal method
function mul(a,b){
    return a*b;
}
console.log(mul(2,3));
