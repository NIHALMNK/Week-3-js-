function ck() {
    let size = 21;
    if (size > 10) {
        return "input added";
    } else {
        throw "input is error"; 
    }
}
function mk() {
    let size = 21;
    if (size > 10) {
        return "input added";
    } else {
        throw "input is error"; 
    }
}

async function runCk() {
    try {
        const result = await ck(); 
        console.log(result);
    } catch (error) {
        console.log(error); 
    } finally {
        console.log("end"); 
    }
}

async function dd() {
    try {
        const result = await mk(); 
        console.log(result);
    } catch (error) {
        console.log(error); 
    } finally {
        console.log("end"); 
    }
}

runCk(); // Call the async function
dd()