const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
    ];

    //task 1
    const recommedFood=[];
    for(let i=0;i<dogs.length;i++){
        recommedFood[i]=dogs[i].weight**0.75*28;
    }
    for(let i=0;i<dogs.length;i++){
        dogs[i].recommedFood=Math.floor(recommedFood[i]);
    }
    // console.log(dogs)


    // task 2
    let findSarah;
    for(let i=0;i<dogs.length;i++){
        for(let j=0;j<dogs[i].owners.length;j++){
            if('Sarah'===dogs[i].owners[j]){
                findSarah=i;
                break;
            }
        }
    }

  // task 3

const ownerEattooMuch=[];
const ownerEattoLess=[];
for(let i=0;i<dogs.length;i++){
    if(dogs[i].curFood>dogs[i].recommedFood){
        ownerEattooMuch.push(dogs[i].owners);
    }
    else{
        ownerEattoLess.push(dogs[i].owners);
    }
}
// console.log(ownerEattooMuch)
// console.log(ownerEattoLess)

const less=[];
for(let i=0;i<ownerEattoLess.length;i++){
  let arr=ownerEattoLess[i];
  for(let j=0;j<arr.length;j++){
    less.push(arr[j]);
  }
}

const more=[];
for(let i=0;i<ownerEattooMuch.length;i++){
    let arr=ownerEattooMuch[i];
    for(let j=0;j<arr.length;j++){
        more.push(arr[j]);
    }
}
console.log(less)
console.log(more);
//task 4

console.log(`${more.join(' and ')}'s dogs are eating too much`)
console.log(`${less.join(' and ')}'s dogs are eating too less`)


//task 5
let bool =false;
for(let i=0;i<recommedFood.length;i++){
    if(recommedFood[i]===dogs[i].curFood){
        bool =true
        console.log(true)
    }
}
if(!bool){
    console.log(false)
}

//task 6
const check=(
    dog=>dog.curFood>dog.recommedFood*0.9&&dog.curFood<dog.recommedFood*1.1
)
console.log(dogs.some(check))

//task 7

console.log(dogs.filter(check));


//task 8
const dogSorted=dogs.slice().sort((a,b)=>a.recommedFood-b.recommedFood);
console.log(dogSorted)