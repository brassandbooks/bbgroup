$(document).ready(function(){

 const cardFront = document.querySelectorAll('.front')
 const cardBack = document.querySelectorAll('.back')
 
function toggleCard(c, s){
    if(c.className.includes('activeCard')){
        c.classList.remove('activeCard')
        s.classList.add('activeCard')
      }
     else {
        c.classList.add('activeCard')
        s.classList.remove('activeCard')
     }
}
 cardFront.forEach( card => {
     card.addEventListener('mouseenter', () => {
         id = card.id
         cardBack.forEach( seen => {
             if(seen.id === id){
                toggleCard(card, seen)
               seen.addEventListener('mouseleave', ()=> {
                toggleCard(card, seen)
               })
             }
         })
     })
 })

 
})