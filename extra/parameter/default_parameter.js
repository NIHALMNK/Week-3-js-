//Default Parameters
//Write a function that calculates the area of a rectangle, with default values for width and height.

function area(width=10,height=5){
    return width*height;

}
console.log(area(5)); //=>25
console.log(area(5,10)); //=>50
console.log(area(6,undefined)); //=>30
console.log(area());  //=>50


//Create a function to concatenate two strings, with a default separator of a space.
function connect(a="sorry",b=" ",c="no words defined"){
    return a+b+c;

}

console.log(connect("hii",undefined,"guys"));
