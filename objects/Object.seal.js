// Use Object.seal() on an object car = { make: 'Toyota', model: 'Corolla' }. Can you modify existing properties? Can you add new properties?

let car = { make: 'Toyota', model: 'Corolla' }
Object.seal(car)

car.make="BMW"

console.log(car.make);//=>BMW
//=>true
delete car.make;
 console.log(car);//=>{ make: 'BMW', model: 'Corolla' }
    //=> false
//====================================================================

console.log(Object.isFrozen(car));//=>false
console.log(Object.isSealed(car));//=>true
