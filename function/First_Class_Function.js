//First Class Function.
// Assigning a Function to a Variable:
let a=function(){
    console.log("hii");
    
}
a();
//Passing a Function as an Argument:
function b(call){
    call();
}
b(function(){
    console.log("hii guys...")
});
 
//Returning a Function from Another Function
function c(greet){

    return function(name){
        console.log(`${greet} ${name} how are you`); //'hello nihal how are you'
        
    }
}
let ha=c('hello');
ha("nihal");

//Storing Functions in Data Structures
let obj=[
    function(v,x){return v+x;},
    function(v,x){return v-x;}
];
console.log(obj[0](5,3))
console.log(obj[1](4,8));


//Pass a function as an argument to another function and return the result.
function r(getname){

return function(greet){
    console.log(`${getname} ${greet}`);
    
};

}

let hk=r("nihal");
hk("hello");

//Store a function in a variable and pass it to a higher-order function.

let fun=function s(k,l){
    let num1=k;
    let num2=l;
 return [num1,num2]
}

let l=function(){
    return k*2;
}
let k=function(){
    return l+5;
}
let jj=fun(5,7);
console.log(jj);



