let number=Math.floor(Math.random()*20)+1
console.log(number)
let highScore=0;
document.querySelector('.check').addEventListener('click',function(){
   const guess=Number(document.querySelector('.guess').value)
   if(!guess){
    document.querySelector('.message').textContent="No Number"
   }
   else{
    let score=document.querySelector('.score').textContent;
    if(guess>number){
        if(score>1){
            score--;
            document.querySelector('.message').textContent="You guess too high"
        }
        else{
            document.querySelector('.message').textContent="loss the game"
            document.querySelector('.score').textContent=0
        }
    }
    else if(guess<number){
        if(score>1){
            score--;
            document.querySelector('.message').textContent="You guess too low"
        }
        else{
            document.querySelector('.message').textContent="loss the game"
            document.querySelector('.score').textContent=0
        }
      
    }
    else{
        if(highScore<score){
            highScore=score
        }
        document.querySelector('.highscore').textContent=highScore
        document.querySelector('.message').textContent="You guess correct"
        document.querySelector('body').style.backgroundColor='green'
        document.querySelector('.number').style.width='30rem'
        document.querySelector('.number').textContent=number
    }
    document.querySelector('.score').textContent=score;
   }
})
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    number=Math.floor(Math.random()*20)+1;
    document.querySelector('.message').textContent="Start Gaming...."
    document.querySelector('.score').textContent=20
    document.querySelector('.number').textContent='?'
    document.querySelector('.guess').value=''
    document.querySelector('body').style.backgroundColor='#222'
    document.querySelector('.number').style.width='15rem'
    document.querySelector('.highscore').textContent=highScore
})
console.log(highScore)