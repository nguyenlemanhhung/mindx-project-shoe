const btnToggle = document.querySelector('.btn-toggle');
let menu = document.querySelector('.menu');
let circleOverlay = document.querySelector('.circle-overlay');

btnToggle.addEventListener('click', ()=>{
    btnToggle.classList.toggle('open-menu');

    if(btnToggle.classList.contains('open-menu') ){
        openMenu(); 
    } 
    else {
        closeMenu(); 
    }
})

function openMenu(){
    menu.classList.add('open');
    circleOverlay.classList.add('expand');
}
function closeMenu(){
    menu.classList.remove('open');
    circleOverlay.classList.remove('expand');
}

const dropMenu = document.querySelector('.dropdown');
dropMenu.addEventListener('click', ()=>{
    dropMenu.classList.toggle('show-submenu');
})