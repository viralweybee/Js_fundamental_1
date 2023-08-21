const arr1=[3,5,2,12,7]
const arr2=[4,1,15,8,3]
function testdata(arr1,arr2){
    const copy_arr1=arr1;
    copy_arr1.splice(0,1);
    copy_arr1.splice(-2,2)
    const combine=arr1.concat(arr2);
   checkage(combine)
}
function checkage(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]>2){
            console.log(`Dog number ${i+1} is an adult and is ${arr[i]} years old`);
        }
        else{
            console.log(`Dog number ${i+1} is a still puppy`)
        }
    }
}
testdata(arr1,arr2)