
const panel = document.querySelectorAll('.box__image')
panel.forEach(elem =>{
    elem.addEventListener('click', ()=>{
        removeActiveClasses()
        elem.classList.add('active')
    })
})
function removeActiveClasses(){
    panel.forEach(el=>{
        el.classList.remove('active')
    })
}