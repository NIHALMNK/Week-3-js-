const person={name:"nihal"};
Object.defineProperty(person,'age',{
    value:30,
    writable:false,
    enumerable:true,
    configurable:true,

})
    console.log(person.age);
    
person.age=40;

console.log(person.age);
//========================================

