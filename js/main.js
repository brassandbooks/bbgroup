$(document).ready(function(){

    let links = document.querySelectorAll('.nav-item')


    links.forEach(link => {
        link.addEventListener('click', e => {        
            links.forEach(l => {
                if(l.className.includes('active')){
                    l.classList.remove('active')
                }
                e.target.parentNode.classList.add('active')
            });
        })
    })
})