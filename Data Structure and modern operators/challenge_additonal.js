// //1) problem 1

// var arr=[10,20,20,10,10,30,50,10,20,30,50,60,50];
// var set=new Set();
// arr.sort();
// // console.log(arr)
// var count=1;
// var max=0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]===arr[i+1]){
//         count++;
//         if(count==3){
//             set.add(arr[i])
//         }
//     }
//     else{
//         count=1;
//     }
// }
// console.log(set)


// 2 problem 2
var arr=[25,10,5,2,1]
var amount=53
var i=0;
var coins=[];
while(amount>0){
    if(amount>=arr[i]){
        coins.push(arr[i])
        amount=amount-arr[i];
    }
    else{
        i++;
    }
}
console.log(coins)