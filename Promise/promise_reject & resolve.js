function A(value){
    if(value<10){
        return Promise.reject("value is too low..")
    }else{
        return Promise.resolve("value is acceptable")
    }
}
A(20)
.then((ans)=>{
    console.log(ans);
    
})
.catch((error)=>{
    console.log("error !. "+error);
    
})