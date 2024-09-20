//Write a constructor function Car that takes make and model as parameters and assigns them to the object being created.

function car(name,model){
    this.name=name,
    this.model=model

}


const mycar = new car("BMW",2018);
console.log(mycar.name);
console.log(mycar.model);
//=========================================
