//foreEach()
//to execute a provided function once for each element in an array

// let variableName = [1, 2, 3, 4];

// variableName.forEach((num, index) => {
//     //=>
// });
//========printing on line by line============>
//====================================================
//Given the array colors = ['red', 'blue', 'green'], use forEach() to log each color to the console.
let colors = ['red', 'blue', 'green']
colors.forEach((num, index)=>{
    console.log(num);//=>'red', 'blue', 'green' printing on line by line
    console.log(index);//=> 0,1,2
    return num;
})

//=====================================================
//You have an array numbers = [10, 20, 30]. Use forEach() to log each number multiplied by 2 to the console.
let numbers = [10, 20, 30]

numbers.forEach((num,index)=>{
    let multi=num*2;
    console.log(multi);//=> 20,40,60
})
//=================================================