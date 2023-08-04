let Marks_weight=95;
let Marks_height=1.88;
let John_weight=85;
let John_height=1.76;
let calculate_person1=Marks_weight/(Marks_height**2)
let calcuate_person2=John_weight/(John_height**2);
let compare =calculate_person1>calcuate_person2
if(compare){
    console.log(`Marks's BMI is higher than John's!`)
}
else{
    console.log(`John's BMI is higher than Mark's! `)
}