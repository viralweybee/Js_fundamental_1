// const maskCreditCard=function(number){
//     const str=number+''
//     const last=str.slice(-4)
//     return last.padStart(str.length,'*')

// }
// console.log(maskCreditCard(200470116041))

// //repeat 
// const message='Bad weather.... All Depatures '
// console.log(message.repeat(4))


// //destructing assignment
// var colors=[1,2,3,4,5]
// var[color1,,color2,,color3]=colors
// console.log(color1)
// console.log(color2)
// console.log(color3)


// //array destructing and rest operator
// var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"]; 
// var [a,b,...args]=colors
// console.log(a)
// console.log(b)
// console.log(args)







// // swapping variables
// var x=100,y = 200
// // if we put semi column in y then code is working otherwise not working
// [x, y] = [y, x]
// console.log(x)
// console.log(y)


//...................................................................Destructing object..................................................................


// 1)how to assign to existing variable names
// var employee={
//     firstname: "viral",
//     lastname: "devmurari",
//     dateofbirth: "2003"
// }
// var {firstname,lastname,dateofbirth}=employee
// console.log(firstname,lastname,dateofbirth)

// 2) assing new variable name 
// var employee={
//     firstname: "viral",
//     lastname: "devmurari",
//     dateofbirth: "2003"
// }
// var{firstname: fn,lastname: ln, dateofbirth: dob}=employee

// console.log(fn)



// 3)how to assign to a variable with default values
var employee = {    // Object we want to destructure
    firstname: 'Jon',
    lastname: 'Snow',
    dateofbirth: '1990'
};

// Destructuring the object into variables without 
// assigning default values 
var { firstname, lastname, country } = employee;
console.log("Without setting default values")
console.log( firstname, lastname, country);

// Destructuring the object into variables by 
// assigning default values 
var { firstname = 'default firstname', 
      lastname = 'default lastname', 
      country = 'default country' } = employee;
console.log("\n After setting default values")
console.log( firstname, lastname, country);