function person(name){
    this.name=name
}

person.prototype.age=20;

const p1= new person("nihal");
console.log(p1);//=>person { name: 'nihal', age: 20 }

console.log(p1.age)//=> 20
