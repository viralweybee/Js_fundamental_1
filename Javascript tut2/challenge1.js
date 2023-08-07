var calculate_average = (a,b,c)=>{
    return (a+b+c)/3;
}
function checkaverage(dolphin, koalas){
    if(dolphin>=2*koalas){
        console.log("Dolphin is winner")
    }else if(koalas>=dolphin*2){
        console.log("Koalas is winner")
    }
    else{
        console.log("No one is winner")
    }
}
var dolphin=calculate_average(23,34,27);
var koalas=calculate_average(85,54,41);
console.log(dolphin)
console.log(koalas)
checkaverage(dolphin,koalas)