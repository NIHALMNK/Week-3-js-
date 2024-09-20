//Promise
const myPromise = new Promise((resolve, reject) => {
    const success = 8; 

    setTimeout(() => {
        if (10<success) {
            resolve("Promise resolved successfully!"); 
            console.log("success");
            
        } else {
            reject("Promise rejected!");
            console.log("rejected");
             
        }
    }, 2000); 
});

// Using .then(), .catch(), and .finally()
myPromise
    .then((result) => {
        console.log("Success:", result); 
    })
    .catch((error) => {
        console.log("Error:", error); 
        
    })
    .finally(() => {
        console.log("Promise has been settled (resolved or rejected)."); 
    });
//============================================================
//Create a promise that resolves after 2 seconds and logs a message.

let pro= new Promise((resolve,reject)=>{
    let a=5;
    setTimeout(()=>{
        if(a<4){
        resolve("i am the answer");
        }else{
            reject("error")
        }
    },2000);
});

pro
.then((result)=>{
    console.log(result);
    
})
.catch((error)=>{
    console.log(error);
    
})
.finally(()=>{
    console.log("ended");
    
})

//==============================================================
//Write a function that returns a promise which either resolves or rejects based on a random value.

function ck(){
    let size=21
    return new Promise((resolve,reject)=>{
        if(size<10){
            resolve("input added")
        }else{
            reject("input is error")
        }
    })
}

ck()
.then((result)=>{
    console.log(result);
    
})
.catch((error)=>{
    console.log(error);
    
})
.finally(()=>{
    console.log("end");
    
})
