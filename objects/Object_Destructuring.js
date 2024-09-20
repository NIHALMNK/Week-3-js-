//Object destructuring in JavaScript allows you to extract properties from an object and assign them to variables using a concise syntax.
let obj={
    name:"nihal",
    age: 18,
    location:"alanallur"
}
let {name,age,location}=obj;
console.log(name);
console.log(location);
console.log(age);
//===================================================
//Write a function that takes an object and destructures it into multiple variables for logging.
function add(obj){
    let{name,age}=obj;
    console.log(name);//=>'nihal
    console.log(age);//=>20
}

let objs={
    name:"nihal",
    age:20,
}

add(objs)
//=====================================================
