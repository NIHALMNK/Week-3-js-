//Write a factory function that creates a car object with a brand and model.

function A(name,data){
    return {
        name: name,
        address: data,
        greet(){
            console.log(`my name is ${this.name} and i am coming from ${this.address}`);
            //=>'my name is nihal and i am coming from alanallur' , 'my name is anu and i am coming from mannarkkad'
        }
    }
}

let c=A("nihal","alanallur")
c.greet()
let v=A("anu","mannarkkad")
v.greet()

//Create a factory function that generates different types of animals based on input.
function B(animal,type){
    return{
        name:animal,
        type:type,
        call(){
            console.log(`the ${animal} is a animal that leaves on ${type}`);
            //=>'the lion is a animal that leaves on jungle'
        }
    }
}
let t=B("lion","jungle")
t.call()