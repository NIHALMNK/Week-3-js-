//creating a arrow function
const a =(para1,para2)=> para1+para2;
console.log(a(2,2))

//Create a normal function and an equivalent arrow function to multiply two numbers.

//normal function:
let sample=function(a,b){
    return a*b;
}
console.log(sample(2,3));

//arrow function
let sample2=(a,b)=>{
    return a*b;
}
console.log(sample2(3,4));

//Compare this behavior in arrow functions and normal functions inside an object method.
//normal function
let obj ={
    value:10,
    getValue: function(){
        return this.value;
    }
};
console.log(obj.getValue());

//arrow function

let obj2={
    value:30,
    getvalue: () => this.value,
};

console.log(obj2.getvalue());

//Write an arrow function that filters out odd numbers from an array.

let fill=(array)=>{
    let result=array.filter(num=>num%2!=0);
    return result;
}
let ar=[1,2,3,4,5,6,7,8,9,10]
let arr=fill(ar);


console.log(arr); //=>[ 1, 3, 5, 7, 9 ]

//Create an arrow function that concatenates two strings.

let arrange=(a1,a2)=>{
   let mix= a1.concat(a2);
   return mix;
}

let one="Hello ";
let two="Nihal"

console.log(arrange(one,two))

