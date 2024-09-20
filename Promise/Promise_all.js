// Promise.all()
//resolve when all promise will full-filled
//=============================================
/*Create three promises that resolve after different 
time intervals (1 second, 2 seconds, and 3 seconds).
 Use Promise.all() to run them in parallel and
 log the results once all of them are resolved.*/


function A(){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            console.log("1  sec ");
            resolve(1);
        },1000)
    })
}

function B(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("2 sec");
            resolve(2);
        },2000)
    })
}

function C(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("3 sec");
            resolve(3)
            
        },3000)
    })
}


Promise.all([A(),B(),C()])
.then((result)=>{
    console.log("all task are completed  :"+result);
})
.catch((result)=>{
    console.log("some task are failed  :"+result);
})
.finally(()=>{
    console.log("finished");
    
})

//==============================================================================
/* Create two promises, one that resolves and one that rejects. Use Promise.all() 
and handle the rejection case to log an error when one of the promises fails.*/

function X(){
    let a="10";
    let b="10";
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(a===b){
                resolve("success");
                
            }else{
                reject("error")
            }
        })
    })
}

function Y(){
    let a="10";
    let b=10;
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(a===b){
                resolve("success");
                
            }else{
                reject("error")
            }
        })
    })
}

function Z(){
    let a="10";
    let b="10";
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(a===b){
                resolve("success");
                
            }else{
                reject("error")
            }
        })
    })
}

Promise.all([X(),Y(),Z()])
.then((result)=>{
    console.log(result);
    
})
.catch((error)=>{
    console.log(error);
    
})
.finally(()=>{
    console.log("ended");
    
})