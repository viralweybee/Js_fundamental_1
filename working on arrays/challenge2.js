const calAverageHumanAge=function(age){
    const humanAges=age.map(age=>(age<=2?2*age:16+age*4));
    const adults=humanAges.filter(age=>age=>18)
    console.log(humanAges)
    const average=adults.reduce((acc,age)=>acc+age,0)/adults.length
    return average;
}
const avg1=calAverageHumanAge([5,2,4,1,15,8,3])
const avg2=calAverageHumanAge([16, 6, 10, 5, 6, 1, 4])
console.log(avg1)
console.log(avg2)