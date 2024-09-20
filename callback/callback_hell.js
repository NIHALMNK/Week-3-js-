//callback hell
function a(name,x){
    console.log("hello "+ name); //=>'hello nihal'
    x();
}
 function b(c){
    
    console.log("goodbye");//=> 'goodbye'
    c();
}
function c(d){
    console.log("how are you");//=> 'how are you' 
    d()
}
function d(){
    console.log("take care ");//=> 'take care '
    
}

a('nihal',function(){
    b(function(){
        c(function(){
            d();
        })
    })
});

//-----------------------------------------------------------------
//Simulate callback hell by nesting 3 asynchronous functions that print numbers after a delay.
function one(back){
    setTimeout(function(){
        console.log("1"); //=>1
        back();
    },1000)
}

function two(back2){
    setTimeout(function(){
        console.log("2"); //=>2
        back2();
    },2000)
}

function three(back3){
    setTimeout(function(){
        console.log("3"); //=>3
        back3();
    })
}


//calling the callbacks..(HELL)

one(()=>{
    two(()=>{
        three(()=>{
            console.log("done"); //=>done
            
        })
    })
})
//=====================================

// Refactor callback hell into Promises for a series of chained events.

function A(){
    return new Promise((back)=>{
        setTimeout(() => {
            console.log("one"); //=> one
            back()
        }, 1000);
    })
}

function B(){
    return new Promise((back2)=>{
        setTimeout(()=>{
            console.log("two"); //=> two
            back2()
        },2000);
    })
}

function C(){
    return new Promise((back3)=>{
        setTimeout(()=>{
            console.log("three"); //=>three
            back3()
            
        },3000);
    })
}

//calling
A()
.then(B)
.then(C)
.then(()=>{
    console.log("full filled"); //=> full filled
    
});

