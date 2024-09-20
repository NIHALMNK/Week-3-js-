//promise_race.




//======================================
/* Create two promises: one that resolves after 3 seconds and one that
 resolves after 1 second. Use Promise.race() to log which promise wins the race. */

 function A(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(1)
        },3000)
    })
}
function B(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(2)
        },1000)
    })
}

Promise.race([A(),B()])
.then((result)=>{
    console.log(result); //=>2
    
})
.catch((error)=>{
    console.log(error);
    
})
.finally(()=>{
    console.log("end"); //=>end
    
})
//=============================================================
//