// Promise.allSettled()
/*Create three promises: one that resolves,
one that rejects, and one that takes 2 seconds 
to resolve. Use Promise.allSettled() to log the 
status and value (or reason) of each promise
  after they all settle. */

    function A(){
        return new Promise((resolve , reject)=>{  
                resolve(1)
           
        })
}
function B(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            reject(0)
        },2000)
    })
}

function c(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve(2)
        },2000)
    })
}

Promise.allSettled([A(),B(),c()])
.then((result)=>{
    console.log(result);
    
})
.catch((error)=>{
    console.log(error);
    
})
.finally(()=>{
    console.log("the end");
    
})