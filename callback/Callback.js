//Callback
function a(callback){
    callback();

}
function b(a){
console.log("what the fuck..."+a);

}
a(()=>b("sorry"));//=>'what the fuck...sorry'

//Write a function that takes a callback to compute the square of a number.

function s(num,x){
    console.log("sq is :"+num);
}

function sq(num){
    let result=num*num;
    console.log(result);
    return result;
};
    s(sq(9));




//Implement a function that fetches data and takes a callback for error handling.

