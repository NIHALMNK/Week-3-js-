//map()
//Given the array numbers = [1, 2, 3, 4], use map() to create a new array where each number is squared. What does the new array look like?

let numbers = [1, 2, 3, 4]

let r=numbers.map((a)=>{
return a*a;
})

console.log(r);//=>[ 1, 4, 9, 16 ]
//==================================================
//You have an array words = ['hello', 'world']. Use map() to convert each word to uppercase. What is the result?
let words = ['hello', 'world']

let up=words.map((a)=>{
 
    return a.toUpperCase();;
})

console.log(up); //=>[ 'HELLO', 'WORLD' ] 
//=====================================================

