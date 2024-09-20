//Promise-chain
//Chain three promises where each subsequent promise depends on the previous one's result.
function a(){
let a=new Promise((resolve,reject)=>{
    let c=10;
    if(c>9){
        resolve("the number is bigger than 10 ")
    }else{
        reject("then number is less than 10 ")
    }
   
})
return a;
}

function b(){
    let b=new Promise((resolve,reject)=>{
        let c=100;
        if(c>90){
            resolve("the number is bigger than 10 ")
        }else{
            reject("then number is less than 10 ")
        }
        
    })
    return b;
    }

function c(){
        let c=new Promise((resolve,reject)=>{
            let c=100;
            if(c>90){
                resolve("there is a value ")
            }else{
                reject("i love you ")
            }
            
        })
        return c;
        }
a()
.then((result)=>{
    console.log(result);
    return b();
})
.then((result2)=>{
    console.log(result2);
    return c();
})
.then((result2)=>{
    console.log(result2);
})

.catch((error)=>{
    console.log(error);
    
})
.finally(()=>{
    console.log("done");
    
})
//=======================================================================================


