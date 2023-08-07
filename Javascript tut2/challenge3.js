const mark={
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi=this.mass/this.height**2;
        return this.bmi;
    }
}
const john={
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.6,
    calcBMI: function(){
        this.bmi=this.mass/this.height**2;
        return this.bmi;
    }
}
mark.calcBMI()
john.calcBMI()
if(mark.bmi>john.bmi){
    console.log("Mark's bmi is"+ mark.bmi +" higher than john bmi "+john.bmi)
}
else if(john.bmi>mark.bmi){
    console.log("John's bmi is higher than mark bmi")
}
console.log(mark.bmi+" "+john.bmi)