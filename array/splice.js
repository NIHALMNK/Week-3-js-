//it will help to replace or remove  elements on the array
//Given the array months = ['Jan', 'Feb', 'Mar', 'Apr'], use splice() to remove 'Mar' and add 'May' in its place. What does the array look like afterward?


let months = ['Jan', 'Feb', 'Mar', 'Apr']
let change=months.splice(2,1,"may")
console.log(change);//=>[ 'Mar' ]
console.log(months);//=>[ 'Jan', 'Feb', 'may', 'Apr' ]


//=========================================================
//You have an array names = ['John', 'Doe', 'Jane']. Use splice() to remove 'Doe' from the array. What does the array look like after this operation?

let names = ['John', 'Doe', 'Jane']

let x=names.splice(1,1)

console.log(names);//=> [ 'John', 'Jane' ]

//========================================================


