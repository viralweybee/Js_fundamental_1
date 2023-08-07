const bills=[ 22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52]
function caltip(val){
    if(val>=50&&val<=300){
        val=val+0.15*val;
    }
    else{
        val=val+.20*val;
    }
    return val;
}
const tips=[];
for(let i=0;i<bills.length;i++){
    tips[i]=caltip(bills[i])
}
console.log(tips,totals)

