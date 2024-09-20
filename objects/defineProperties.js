//Use Object.defineProperties to define two properties: name as writable and age as non-writable, in an object person = {}.
const people={}
Object.defineProperties(people,{
    name:{ 
    value:"nihal",
    writable:true,
    enumerable:false,//optional
    configurable:false,//optional
},
age:{
    value:30,
    writable: false,  
}
})
people.age=40;

people.name="anu";

console.log(people.name);//=>"anu"
console.log(people.age);//=>30



