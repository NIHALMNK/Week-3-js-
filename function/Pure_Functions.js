//Pure Functions
//it is a normal function but 




//Write a pure function that calculates the factorial of a number.
function fat(n){

    let result=1;
    for(let i=1;i<=n;i++){
        result*=i;
    }
    return result;

}

console.log(fat(5))//=>120
console.log(fat(3)) //=>6

//Create a pure function that returns the length of a string.
function len(a){
    let lent=a.length;
    return lent;
}

console.log(len("hii"))