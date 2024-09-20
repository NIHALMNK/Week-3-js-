//to add a element on the first 

//Create an array vehicles = ['car', 'bike']. Use unshift() to add 'bus' and 'train' to the beginning of the array. What does the array look like after using unshift()?

const vehicles = ['car', 'bike'];

let r=vehicles.unshift("bus","train")
console.log(vehicles);//=>[ 'bus', 'train', 'car', 'bike' ]
//to find the length of the array 
console.log(r);//=> 4

//===========================================================
//You have an array numbers = [2, 3, 4]. Use unshift() to add the number 1 to the array. What is the new length of the array?

let numbers = [2, 3, 4]
let c=numbers.unshift(1)
console.log(numbers); //=>[ 1, 2, 3, 4 ]
