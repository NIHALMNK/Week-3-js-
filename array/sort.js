//to sort the array
//Given the array numbers = [4, 2, 5, 1, 3], use sort() to sort the array in ascending order. What does the sorted array look like?
 let numbers = [4, 2, 5, 1, 3]
 let st=numbers.sort((a,b)=>{
    return a-b;
 })
 console.log(st);//==>[1,2,3,4,5]
 //===============================================
 //You have an array words = ['banana', 'apple', 'cherry']. Use sort() to sort the words in alphabetical order. What is the result?
 let words = ['banana', 'apple', 'cherry']
 let ab=words.sort();

console.log(ab);//=>[ 'apple', 'banana', 'cherry' ]
//=======================================================

