// const bookings=[]
// const createBooking =function(flightNum,numPassengers=1,price=199*numPassengers){
//     // numPassengers=numPassengers||1;
//     // price = price ||199
//     const booking={
//         flightNum,
//         numPassengers,
//         price,
//     }
//     console.log(booking)
//     bookings.push(booking)
// }
// createBooking('LH123')
// createBooking('LH123',2,800)


//lec 2

// const flight='LH234'
// const jonas={
//     name: 'Jonas Schmedtmann',
//     passport: 24739479284
// }
// const checkdIn=function(flightNum,passenger){
//     flightNum='LH399'
//     passenger.name='Mr. '+passenger.name
//     if(passenger.passport===24739479284){
//         alert("checked in")

//     }
//     else{
//         alert("wrong password")
//     }
// }
// checkdIn(flight,jonas)
// console.log(flight)
// console.log(jonas)


// //lec 4

// // const word=function(str){
// //     return str.replace(/ /g,'').toLowerCase()
// // }
// const upperFirstWord=function(str){
//     const [first,...others]=str.split(' ')
//     return [first.toUpperCase(),...others].join(' ');
// }

// //higher order function
// const transformer=function(str,fn){
//     console.log(`Original string: ${str}`)
//     console.log(`Transformed string: ${fn(str)}`)
//     console.log(`Transformed by: ${fn.name}`);
// }
// transformer('Javascript is the best! ',upperFirstWord);


// //recalling lec 5
// const greet=function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`)
//     }
// }


// const greeterHey=greet('Hey')
// greeterHey('Jonas')
// greeterHey('Steven')


// //challenge
// const greet1=(greeting)=>{
//     return (name)=>{
//         console.log(`${greeting} ${name}`)
//     }
// }
// const greeterHey1=greet1('hey')
// greeterHey1('viral')


// //lec 6
// const lufthansa={
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     book(flightNum,name){
//         console.log(`${name} booked a seat on ${this.airline} flight${this.iataCode}${flightNum}`)
//         this.bookings.push({flight:`${this.iataCode}${flightNum}`,name});
//     }
// }
// lufthansa.book(239,'Jonas Schmedtmann');
// lufthansa.book(635,'John Smith');
// console.log(lufthansa);
// const eurowings={
//     name: 'Eurowings',
//     iataCode: 'EW',
//     bookings:[]
// }

// closer
// const secureBooking=function(){
//     let passengerCount=0;
//     return function(){
//         passengerCount++;
//         console.log(`${passengerCount} passenger`)
//     }
// }
// const booker=secureBooking();
// booker();
// booker();
// booker();




// //example 1
// let f;
// const g=function(){
//     const a=23;
//     f=function(){
//         console.log(a*2)
//     }
// }
// g();
// f();

//example 2
const boardPassenger=function(n,wait){
    const perGroup=n/3;
    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`)
        console.log(`There are 3 groups each with ${perGroup} passengers`);
    },wait*1000);
    console.log(`Will start boarding in ${wait} seconds`)
}
boardPassenger(180,3)