//Write an object method using this to return the object’s properties.

let A ={
    name:"nihal",
    age:18,
get_info(){
    return `name : ${this.name} , age : ${this.age}`
}
};

console.log(A.get_info());


//if we use arrow function .the this will reffer the global object
let B ={
    name:"anu",
    age:22,
    greet:() =>{
     console.log(`name : ${this.name} , age : ${this.age}`);
     //'name : undefined , age : undefined'
}    
};

B.greet();
