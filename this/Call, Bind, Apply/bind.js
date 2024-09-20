
//You have an object car = { brand: 'Toyota' } and a function describeCar that logs the car's brand. Use bind() to create a new function bound to the car object and call it.

car={
    brand:"toyota",
    
}
function  describeCar(){
    console.log(`this car is a ${this.brand}.`);
    
}

const discribe=describeCar.bind(car);

discribe()

//======================================
// multiply={
//     num1:5,
    
// }
function multi(a,b){
    return a*b;
}

const a=multi.bind(null,5)

console.log(a(3));
