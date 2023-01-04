const content = document.querySelector(".main");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

left.addEventListener('mouseenter', () => {
  content.classList.add('hoverLeft');
})

left.addEventListener('mouseleave', () => {
  content.classList.remove('hoverLeft');
})

right.addEventListener('mouseenter', () => {
  content.classList.add('hoverRight');
})

right.addEventListener('mouseleave', () => {
  content.classList.remove('hoverRight');
})

//add directional arrows to the menu

$(document).ready(function(){
  $('.sub-menu').parent('li').addClass('has-child position-relative');
});
$(document).ready(function(){
  $('.sub-menu').addClass('position-absolute');
});
