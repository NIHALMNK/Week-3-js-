//Generator Functions
// function * generatorfunction(){
//     yield 1;
//     yield 2;
// }
// let gen=generatorfunction()
// console.log(gen.next().value);//=> 1
// console.log(gen.next().value);//=> 2
// console.log(gen.next().value);//=> undifined

//Write a generator function that generates an infinite sequence of numbers with 1sce delay.

function*multi(){
    let i =1
   while(true){
    
    yield i*3;
   i++
   }
}
let gg=multi()
function a(){
    setInterval(()=>{
    console.log(gg.next().value)
    
},1000)
}
a();

//Implement a generator function to return the first 5 Fibonacci numbers.
