//Constructor Function

//Write a constructor function to create user objects with name and age.
function Person(name,age){
    this.name=name;
    this.age=age;
}
let per=new Person("nihal",20);
console.log(per.name);
console.log(per.age);

//Create a constructor function for a book with title and author.
function Book(name,author){
    this.name=name;
   this.author=author;
}
let bk=new Book("atomic habits " , "nihal")

console.log(bk.name);
console.log(bk.author);
