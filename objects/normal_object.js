let a={
    name:"nihal",
    age:20,
    grade:"A+"
}

console.log(a.name);
//======================================
//Write a function that adds a new property subject to an object.

function address(obj,value){
    obj.address=value;
    }
    let j={
        name:"nihal",
        age:18,
    }
    
    address(j,"alanallur")
    console.log(j);
    
//=========================================
//if you want to add key value to any obj

function add(obj,key,value){
obj[key]=value;
}
let obj={
    name:"nihal"
}

add(obj,"age",18);
add(obj,"address","alanallur");
add(obj,"education","BBA");

console.log(obj);
//================================================


