
//---------------------------------------------------------------------------lecture1-----------------------------------------------------------

// let arr=['a','b','c','d','e'];

// // slice
// // console.log(arr.slice(2))



// //splice
// // console.log(arr.splice(1,3))
// // console.log(arr)



// //reverse
// // const number=[1,2,3,4,5];
// // console.log(number.reverse())

// //concetenate the two arrays
// const number=[1,2,3,4,5];


//--------------------------------------------------------------------------lecture3-----------------------------------------------------------

// 
// const arr=[23,11,64]
// console.log(arr[0])
// // in place of arr[0] we also can use a .at(0)
// console.log(arr.at(0))


//---------------------------------------------------------------------------lecture4-------------------------------------------------------------
// for of loop in javascript

// type1
const movements=[200,450,-400,34,356,234,66];
// for(const arr of movements){
//     console.log(arr)
// }

// // type 2
for(const [i,value] of movements.entries()){
    console.log(i+" "+value);
}


// // for each loop
// movements.forEach(function(value){
//     console.log(value)
// })


//reduce
// const balance=movements.reduce(function(acc,curr,i,arr){
//     console.log(`Iteration ${i}: ${acc}`)
//     return acc+curr;
// })
// console.log(balance)



// -------------------------------------------------------------array from method revision--------------------------------------------------------------
const y=Array.from({length: 5},(curr,i)=>i+1)
console.log(y)


