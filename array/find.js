//The find() method in JavaScript returns the first element in an array that satisfies a provided testing function. If no element matches, it returns undefined.
//Given the array numbers = [4, 9, 16, 25], use find() to get the first number greater than 10. What is the result?
let numbers = [4, 9, 16, 25]
let large=numbers.find((a)=>{
    return a>10;
})
console.log(large);//==> 16

//==================================================
//You have an array names = ['Alice', 'Bob', 'Charlie']. Use find() to find the name that starts with 'C'. What is the result?
let names = ['Alice', 'Bob', 'Charlie']
let f=names.find((a)=>{
    return a.startsWith('C');
})

console.log(f);//==>'Charlie'
//===================================================
