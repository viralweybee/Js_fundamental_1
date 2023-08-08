let number =Math.floor(Math.random()*20)+1
let score=20
let highScore=0
document.querySelector(".check").addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value)
    if(!guess){
        document.querySelector('.message').textContent="Not a number"
    }
    else{
        if(guess===number){
            if(highScore<score){
                highScore=score
            }
            document.querySelector('.message').textContent="You guess a correct number"
            document.querySelector('.number').textContent=number
            document.querySelector('body').style.backgroundColor="green"
            document.querySelector('.highscore').textContent=highScore

        }else if(guess!==number){
            score--;
            document.querySelector('.score').textContent=score
            guess>number?document.querySelector('.message').textContent="You guess to high":document.querySelector('.message').textContent="You guess too low" 
        }
    }
})
document.querySelector(".again").addEventListener('click',function(){
    document.querySelector('.message').textContent="Start guessing..."
    document.querySelector('.guess').value=''
    document.querySelector('body').style.backgroundColor="black"
    document.querySelector('.number').textContent='?'
    document.querySelector('.score').textContent=20
})