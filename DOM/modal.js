const modal=document.querySelector('.modal')
const overlay=document.querySelector('.overlay')
const btnCloseModal=document.querySelector('.close-modal')
const btnsOpenModal=document.querySelectorAll('.show-modal')
for(let i=0;i<btnsOpenModal.length;i++){
    btnsOpenModal[i].addEventListener('click',function(){
        console.log('Button clicked')
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    })
}
const closed=function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}
btnCloseModal.addEventListener('click',closed)
overlay.addEventListener('click',closed)
document.addEventListener('keydown',function(e){
    let key=e.key
    if(key==="Escape"&&!modal.classList.contains('hidden')){
      closed()
    }
})