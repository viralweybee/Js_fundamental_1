function caltip(val){
    if(val>=50&&val<=300){
        val=val+0.15*val;
    }
    else{
        val=val+.20*val;
    }
    return val;
}
var arr=[125,555,44];
for(var i=0;i<arr.length;i++){
    console.log(caltip(arr[i]))
}
