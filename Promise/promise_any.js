//promise.any()

/* Create three promises: two that reject and one that 
resolves after 2 seconds.Use Promise.any() to log the first resolved promise.*/

function A(){
    return new Promise((resolve,reject)=>{
        let c="4"
        setTimeout(()=>{
            if(4===c){
        resolve("it is same")
    }else{
        reject("its not same")
    }
        },5000)


    })
}

function B(){
    return new Promise((resolve,reject)=>{
         let c=4;
    if(c==4){
        resolve("it is same")
    }else{
        reject("its not same")
    }
    })
   
}
function C(){
    return new Promise((resolve,reject)=>{
         let c="4";
    if(c==4){
        resolve("it is same")
    }else{
        reject("its not same")
    }
    })
   
}

Promise.any([A(),B(),C()])
.then((result)=>{
    console.log(result);
    
})
.catch((error)=>{
    console.log(error);
    
})
.finally(()=>{
    console.log("the end");
    
})