//Function Object
//Use a function as an object by assigning properties to it and printing them.

function a(){
    console.log("hii guys.....");
}

a.message="i am a messenger";

a.description=function(){
    console.log(this.message)
}

a();
a.description()

//Function as a Constructor
//Create a function and add a custom method to it using the Function.prototype.

function b(name,age){
    this.name=name;
    this.age=age;
}

b.prototype.hii=function(){
    console.log(`hello,my name is ${this.name} and iam ${this.age} years old`);
    
};

let d=new b("nihal",20);
d.hii() //=>'hello,my name is nihal and iam 20 years old'