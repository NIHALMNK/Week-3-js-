// spread operator
//Write a function that merges two arrays using the spread operator.
function merge(a,b){
    
    return [...a,...b];
}
let ar=[1,2,3,4,5];
let a=[6,7,8,9]
let v= merge(ar,a);
console.log(v); //=>Array(9) [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


//=======================================================
function clone(obj){
    return {...obj}
}
let data={
    name:"nihal",
    addrss:"alanallur",
    pin:678601,
}

let copy=clone(data);
console.log(copy);

//cheecking is it correct or not.
console.log(copy===data); //=>false
console.log(copy.name===data.name); //=>true
//=====================================================