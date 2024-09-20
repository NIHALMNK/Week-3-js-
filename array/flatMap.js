//flatMap()
//Given the array numbers = [1, 2, 3], use flatMap() to return each number followed by its double. What does the new array look like?
let numbers = [1, 2, 3]
let kk=numbers.flatMap((a)=>{
    return a*2;

})
console.log(kk);
//============================================================
//You have an array words = ['hello', 'world']. Use flatMap() to split each word into its individual characters. What is the result?
let words = ['hello', 'world']
let ss=words.flatMap((a)=>{
    return a.split('');
})
console.log(ss);//=>Array(10) [ 'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd' ]
//===================================================

